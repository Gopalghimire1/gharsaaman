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



@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {
  largescreen=true;
  recs:any[]=[];
  images: string[] = [];
  public innerWidth: any;
  price = 0;
  oldprice = 0;
  stock = 0;
  product: any;
  variant="none";
  id: string="";
  variantstock: any;
  variants: Variant[] = [];
  customOptions: OwlOptions = {
    loop: false,
    items: 1,
    dots: true,
    autoHeight: true
  };
  active: boolean = false;
  @ViewChild('qty')qtyholder:QtyComponent;
  constructor(private router :Router,public client: ApiService, private route: ActivatedRoute, public fav: FavService, public location: Location,public cart:CartService) {



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
    this.largescreen=window.innerWidth>768;
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = this.route.snapshot.paramMap.get('id')??"";
      this.client.get(Setting.apiurl+"product/" + this.id).subscribe((res: any) => {
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
        tempimages.push(Setting.url + this.product.product_images);
        this.product.images.forEach((img:any) => {
          tempimages.push(Setting.url + img.image);

        });

        this.images = tempimages;
        console.log(this.variants);
        console.log(this.product);
        this.recs.push(this.product);
        this.recs.push(this.product);
      });
    });

  }

  choose(event:any) {
    console.log(event);
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
        this.variant,
    );
    this.router.navigate(['/cart']);


  }

}
