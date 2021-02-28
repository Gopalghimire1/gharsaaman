import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './page/cart/cart.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { SingleproductComponent } from './page/singleproduct/singleproduct.component';
import { MainComponent } from './template/main/main.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
