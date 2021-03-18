import { Component, OnInit } from '@angular/core';
// import { faSleigh } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from 'src/app/services/auth.service';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';
import { CheckoutModel } from 'src/app/Model/checkout-model';
import { CheckoutModelItem } from 'src/app/Model/checkout-model-item';
import { Cart } from 'src/app/Model/cart';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  form = FormGroup;
  topped = false;
  oldacc = false;

  public fname = "";
  public lname = "";
  public address = "";
  public email = "";
  public phone = "";
  public password = "";
  public repassword = "";
  public pass = "";
  public repass = "";

  constructor(public cart: CartService, public auth: AuthserviceService,private client:ApiService,private router:Router,public scroll:ScrollService,private location:Location) {
    console.log(this.cart.items);
    this.auth.authSet.subscribe((res)=>{
this.setUser();
    });
  }

  back(){
    this.location.back();
  }


  ngOnInit(): void {
    this.setUser();
  }

  setUser(){
    if (this.auth.logged) {
      this.fname = this.auth.user.fname;
      this.lname = this.auth.user.lname;
      this.address = this.auth.user.address;
      this.email = this.auth.user.email;
      this.phone = this.auth.user.phone;
    }
  }
  signupAndCheckout() {
    if (this.validate()) {
      this.auth.signupstart.subscribe((res) => {
        // this.loader.show(true);
      });
      this.auth.signupsucceeded.subscribe((res) => {
        this.checkout();
      });

      this.auth.signupfailed.subscribe((res: any) => {
        alert(res.error.message);
        // this.loader.show(false);
      });

      this.auth.signup({
        phone: this.phone,
        address: this.address,
        email: this.email,
        fname: this.fname,
        lname: this.lname,

      });
    }
  }

  checkout() {
    var obj = new CheckoutModel();
    obj.email = this.email;
    obj.name = this.fname + ' ' + this.lname;
    obj.streetaddress = this.address;
    obj.phone = this.phone;
    // obj.order_message = this.extramessage;
    let items: CheckoutModelItem[] = [];
    this.cart.items.forEach((element: Cart) => {
      let item = new CheckoutModelItem();
      item.id = element.id;
      item.qty = element.qty;
      item.rate = element.price;
      item.variant_code = element.variant == 'none' ? null : element.variant;
      items.push(item);
    });
    obj.items = items;
    console.log('checkout object', obj);

    this.client
      .postWithAuth(Setting.apiurl + 'booking/checkout', obj)
      .subscribe(
        (res) => {
          this.cart.emptyCart();
          this.router.navigate(['/user']);
        },
        (err) => {
          alert('error');
        }
      );
  }

  validate():any {
    if (this.phone.length != 10) {
      alert('Please Enter Correct Phone no');
      return false;
    }
    if (this.fname == '') {
      alert('please Add First Name');
      return false;
    }
    if (this.lname == '') {
      alert('please Add Last Name');
      return false;
    }

    if (this.address == '' || this.address.length < 6) {
      alert('please Add address');
      return false;
    }

    let regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (this.email == '' || !regexp.test(this.email)) {
      alert('please Enter Proper Email');
      return false;
    }

    if (!this.auth.logged) {
      if (this.password == '') {
        alert('please Enter Password');
        return false;
      }

      if (this.password != this.repassword) {
        alert('please comfirm Password');
        return false;
      }
    }
  }


}
