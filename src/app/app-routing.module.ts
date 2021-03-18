import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './page/cart/cart.component';
import { CategorywiseComponent } from './page/categorywise/categorywise.component';
import { ChangepasswordComponent } from './page/changepassword/changepassword.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { EditprofileComponent } from './page/editprofile/editprofile.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { OrderComponent } from './page/order/order.component';
import { PasschangeComponent } from './page/passchange/passchange.component';
import { ResetpasschangeComponent } from './page/resetpasschange/resetpasschange.component';
import { ResetpasswordComponent } from './page/resetpassword/resetpassword.component';
import { SearchComponent } from './page/search/search.component';
import { SignupComponent } from './page/signup/signup.component';
import { SingleproductComponent } from './page/singleproduct/singleproduct.component';
import { UserdashboardComponent } from './page/userdashboard/userdashboard.component';
import { WishlistComponent } from './page/wishlist/wishlist.component';
import { CategoryComponent } from './partials/category/category.component';
import { GaurdService } from './services/gaurd.service';
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
    path:"categories",
    component:CategoryComponent
  },
  {
    path:"checkout",
    component:CheckoutComponent
  },
  {
    path:'product/:id',
    component:SingleproductComponent
  },
  {
    path:'category/:id',
    component:CategorywiseComponent
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
    path:'search',
    component:SearchComponent
  },

  {
    path:'reset-password',
    component:ResetpasswordComponent
  },

  {
    path:'reset',
    component:ResetpasschangeComponent
  },

  {
    path:'user',
    component:UserComponent,
    children:[
      {
        canActivate:[GaurdService],
        path:'dashboard',
        component:UserdashboardComponent
      },
      {
        canActivate:[GaurdService],
        path:'orders',
        component:OrderComponent
      },
      {
        canActivate:[GaurdService],
        path:'wishlist',
        component:WishlistComponent
      },
      {
        canActivate:[GaurdService],
        path:'chagepassword',
        component:PasschangeComponent
      },
      {
        canActivate:[GaurdService],
        path:'profile',
        component:EditprofileComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:"reload" })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
