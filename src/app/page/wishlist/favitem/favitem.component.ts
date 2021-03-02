import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';
import { FavService } from 'src/app/services/fav.service';

@Component({
  selector: 'app-favitem',
  templateUrl: './favitem.component.html',
  styleUrls: ['./favitem.component.scss']
})
export class FavitemComponent implements OnInit {
 baseurl = Setting.url;
  constructor(public client:ApiService, public fav:FavService) {

  }
  product:any;
  @Input() product_id:number;
  ngOnInit(): void {
    this.client.get(Setting.apiurl+"product/"+this.product_id).subscribe(data=>{
      this.product=data;
      console.log(data);
    });
  }

  removeWishlist(id:any) {
    this.fav.addFav(id);
    this.fav.favs.includes(this.product.product_id);
  }

}
