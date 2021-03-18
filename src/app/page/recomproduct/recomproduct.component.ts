import { Component, Input, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { FavService } from 'src/app/services/fav.service';

@Component({
  selector: 'app-recomproduct',
  templateUrl: './recomproduct.component.html',
  styleUrls: ['./recomproduct.component.scss']
})
export class RecomproductComponent implements OnInit {
  baseurl:any;
  active:boolean=false;
  @Input() product:any;
  constructor(public fav:FavService) {
    this.baseurl=Setting.url;
   }

  managefav(id:any){
    this.fav.addFav(id);
    this.active=this.fav.favs.includes(this.product.product_id);

  }
  ngOnInit(): void {
    this.active=this.fav.favs.includes(this.product.product_id);
  }

}
