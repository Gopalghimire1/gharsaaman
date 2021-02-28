import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Cart } from 'src/app/Model/cart';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.scss'],
})
export class CartitemComponent implements OnInit {

  largescreen=true;
  @Input() cart:Cart;
  @Output() changed=new EventEmitter<Cart>()
  @Output() deleted=new EventEmitter<Cart>()
  constructor() { }

  ngOnInit() {
    this.largescreen=window.innerWidth<768;
  }

  addQty(num:any){
    this.cart.qty+=parseFloat( num);
    if(this.cart.qty<1){
      this.cart.qty=1;
    }
    this.changed.emit(this.cart);
  }

  delete(){
    this.deleted.emit(this.cart);
    console.log("Delete started");
  }

}
