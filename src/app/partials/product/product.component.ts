import { Component, Input, OnInit } from '@angular/core';
import { FavService } from 'src/app/services/fav.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  liked:boolean=false;
  @Input() product:any;
  constructor(public fav:FavService) { }

  managefav(id:any){
    this.fav.addFav(id);
    this.liked=this.fav.favs.includes(this.product.product_id);

  }
  ngOnInit(): void {
    this.liked=this.fav.favs.includes(this.product.product_id);
  }

}
