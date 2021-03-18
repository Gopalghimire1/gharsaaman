import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Variant } from 'src/app/Model/variant';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FavService } from 'src/app/services/fav.service';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';
import { QtyComponent } from 'src/app/partials/qty/qty.component';
import { ApiService } from 'src/app/services/api.service';
import { Setting } from 'src/app/Model/setting';
import { VariantService } from 'src/app/services/variant.service';



@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  largescreen = false;
  disshown=true;
  cardqty:number=0;
  variant="none";
  recs:any[]=[];
  images: string[] = [];
  public innerWidth: any;
  price = 0;
  oldprice = 0;
  stock = 0;
  product: any;
  id:any;
  variantstock: any;
  variants: Variant[] = [];
  customOptions: OwlOptions = {
    loop: false,
    items: 1,
    dots: true,
    autoHeight: true
  };
  active: boolean = false;

  selvariants:any=[];
  cv:any;
  code="";

  @ViewChild('qty')qtyholder:QtyComponent;

  baseurl="";
  constructor(public variantevent:VariantService,private router :Router,public client: ApiService, private route: ActivatedRoute, public fav: FavService, public location: Location,public cart:CartService) {
    this.baseurl = Setting.url;
  }


  back() {
    console.log('back');
    this.location.back();
  }

  managefav(_id:any) {
    this.fav.addFav(_id);
    this.active = this.fav.favs.includes(this.product.product_id);

  }


  ngOnInit(): void {

    this.innerWidth = window.innerWidth;
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = this.route.snapshot.paramMap.get('id');
      this.client.get(Setting.apiurl+ "product/" + this.id).subscribe((res: any) => {
        this.product = res;
        this.active = this.fav.favs.includes(this.product.product_id);
        if (this.product.stocktype == 1) {
          this.product.variants.forEach((attr:any) => {
            let v = new Variant();
            v.title = attr.name;
            v.id = attr.id;
            v.variants = [];
            attr.options.forEach((op:any) => {
              v.variants.push(op)
            });
            this.variants.push(v);
          });

        } else {
          this.price = this.product.newprice;
          if (this.product.onsale) {
            this.oldprice = this.product.oldprice;
          }
          this.stock = this.product.quantity
        }

        var tempimages = [];
        tempimages.push(Setting.url+ this.product.product_images);
        this.product.images.forEach((img:any) => {
          tempimages.push(Setting.url + img.image);

        });

        this.images = tempimages;
        this.recs.push(this.product);
        if(this.product.stocks.length>0){
          this.variantevent.setVariant(this.product.stocks[0].variantdetail);
          this.cv=this.product.stocks[0].variantdetail;
          this.code=this.product.stocks[0].code;
          this.setStock();
        }


        // console.log(this.variants);
        // console.log(this.product);
        // console.log("selvariant",this.selvariant);
      });
    });

  }

  setStock(){
    this.stock=0;
    this.price=0;
    this.oldprice=0;
    this.product.stocks.forEach((stock:any) => {
      if(stock.code==this.code){
        this.stock=stock.qty;
        this.price=stock.price;
        this.oldprice=stock.saleprice
      }
    });

  }
  choose(event:any) {
    console.log(event);
    let i = this.selvariants.findIndex(((obj:any) => obj.vid == event.vid));
    console.log(i);
    if(i>-1){
      this.selvariants[i].opid=event.opid;
    }else{
      this.selvariants.push(event);
    }

    console.log('choosing variant',this.selvariants);
    this.makecode();

    // this.variantevent.selvariant(this.selvariants);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }

  clicked(){
    this.cart.addToCart(
        this.product.product_id,
        this.product.product_name,
        this.product.product_images,
        this.qtyholder.qty,
        this.price,
        this.code,
    );
    this.router.navigate(['/cart']);


  }

  makecode(){
    let data:any=[];
    let c="prod_"+this.product.product_id+">";
    this.selvariants.forEach((selvariant:any) => {
      data.push('attr_'+selvariant.vid+":"+selvariant.opid);
    });
    c+=data.join("|");
    console.log("made code",c);
    console.log("old code",this.code);
    this.code=c;
    this.setStock();
  }


  s="1";
  swithExp(exp:any){
    this.s = exp;
  }


}
