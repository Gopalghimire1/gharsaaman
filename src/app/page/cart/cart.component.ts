import { Component, OnInit, ViewChild } from '@angular/core';
import { Cart } from 'src/app/Model/cart';
import { OthenavComponent } from 'src/app/partials/othenav/othenav.component';
import { CartService } from 'src/app/services/cart.service';
import { ScrollserviceService } from 'src/app/services/scrollservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  topped=false;
  constructor(public scrolle:ScrollserviceService,public cartservice:CartService) { }
  @ViewChild('navbar') navbar:OthenavComponent
  ngOnInit() {}

  scroll(event:any){
    this.topped=event.srcElement.scrollTop>40;
    this.navbar.istop=this.topped;
    console.log("from main",event.srcElement.scrollTop);
    this.scrolle.set(event.srcElement.scrollTop);
  }

  changed(data:Cart){
    this.cartservice.changeQty(data.qty,data.ident);
  }

  delete(data:Cart){
    console.log('on cart window');
    this.cartservice.remove(data.ident);
  }
}
