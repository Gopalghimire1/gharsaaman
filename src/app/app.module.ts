import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MainComponent } from './template/main/main.component';
import { UserComponent } from './template/user/user.component';
import { HomeComponent } from './page/home/home.component';
import { DesktopnavComponent } from './partials/desktopnav/desktopnav.component';
import { MobilenavComponent } from './partials/mobilenav/mobilenav.component';
import { DesktopfootComponent } from './partials/desktopfoot/desktopfoot.component';
import { MobilefootComponent } from './partials/mobilefoot/mobilefoot.component';
import { ProductComponent } from './partials/product/product.component';
import { ProductgroupComponent } from './partials/productgroup/productgroup.component';
import { CategoryComponent } from './partials/category/category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleproductComponent } from './page/singleproduct/singleproduct.component'
import { QtyComponent } from './partials/qty/qty.component';
import { VariantChooserComponent } from './partials/variant-chooser/variant-chooser.component';
import { ImageviwerComponent } from './partials/imageviwer/imageviwer.component';
import { SmallComponent } from './partials/imageviwer/small/small.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { CartComponent } from './page/cart/cart.component';
import { CartitemComponent } from './page/cart/cartitem/cartitem.component';
import { OthenavComponent } from './partials/othenav/othenav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    HomeComponent,
    DesktopnavComponent,
    MobilenavComponent,
    DesktopfootComponent,
    MobilefootComponent,
    ProductComponent,
    ProductgroupComponent,
    CategoryComponent,
    SingleproductComponent,
    QtyComponent,
    VariantChooserComponent,
    ImageviwerComponent,
    SmallComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    CartitemComponent,
    OthenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
