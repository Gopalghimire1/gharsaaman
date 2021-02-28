import { Injectable } from '@angular/core';
import { Cart } from '../Model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  item=0;
  total=0;
  items:Cart[]=[];
  id=0;
  ident:number=0;
  constructor() {

    var data=localStorage.getItem('cart');
    console.log(data);
    if(data !=null && data!=undefined){
      this.items=JSON.parse(data);
    }
    this.calculateAll();

  }

  changeQty(_qty:any,_ident:any){
    let i = this.items.findIndex((obj => obj.ident == _ident));
    this.items[i].qty=_qty;
    this.calculateAll();
  }

  calculateAll(){
    localStorage.setItem("cart", JSON.stringify(this.items));
    let itms=0;
    let tot=0;
    this.items.forEach(cart => {
        itms+=cart.qty;
        tot+=(cart.qty*cart.price);
    });
    this.item=itms;
    this.total=tot;
  }

  remove(_ident:any){
    let i = this.items.findIndex((obj => obj.ident == _ident));
    this.items.splice(i,1);
    this.calculateAll();
  }

  addToCart(id:any,name:any,image:any,qty:any,price:any,variant="none",mode=0){
        let cart=new Cart();
        cart.id=id;
        cart.name=name;
        cart.image=image;
        cart.qty=qty;
        cart.variant=variant;
        cart.price=price;
        cart.ident=this.ident;
        this.ident+=1;
        this.items.push(cart);
        this.calculateAll();

  }






}
