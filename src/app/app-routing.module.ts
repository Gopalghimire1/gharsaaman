import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './page/cart/cart.component';
import { ChangepasswordComponent } from './page/changepassword/changepassword.component';
import { EditprofileComponent } from './page/editprofile/editprofile.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { OrderComponent } from './page/order/order.component';
import { SignupComponent } from './page/signup/signup.component';
import { SingleproductComponent } from './page/singleproduct/singleproduct.component';
import { UserdashboardComponent } from './page/userdashboard/userdashboard.component';
import { WishlistComponent } from './page/wishlist/wishlist.component';
import { MainComponent } from './template/main/main.component';
import { UserComponent } from './template/user/user.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:"",component:HomeComponent}
    ]
  },
  {
    path:'product/:id',
    component:SingleproductComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'user',
    component:UserComponent,
    children:[
      {
        path:'dashboard',
        component:UserdashboardComponent
      },
      {
        path:'orders',
        component:OrderComponent
      },
      {
        path:'wishlist',
        component:WishlistComponent
      },
      {
        path:'chagepassword',
        component:ChangepasswordComponent
      },
      {
        path:'profile',
        component:EditprofileComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
