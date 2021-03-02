import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './template/main/main.component';
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
import { UserdashboardComponent } from './page/userdashboard/userdashboard.component';
import { EditprofileComponent } from './page/editprofile/editprofile.component';
import { WishlistComponent } from './page/wishlist/wishlist.component';
import { OrderComponent } from './page/order/order.component';
import { OrderitemComponent } from './page/order/orderitem/orderitem.component';
import { FavitemComponent } from './page/wishlist/favitem/favitem.component';
import { UserComponent } from './template/user/user.component';
import { UsersidebarComponent } from './partials/usersidebar/usersidebar.component';
import { CategoryService } from './services/category.service';
import { AuthserviceService } from './services/auth.service';
import { HomepageService } from './services/homepage.service';
import { LoaderComponent } from './partials/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
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
    OthenavComponent,
    UserdashboardComponent,
    EditprofileComponent,
    WishlistComponent,
    FavitemComponent,
    OrderComponent,
    OrderitemComponent,
    UserComponent,
    UsersidebarComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  providers: [CategoryService,AuthserviceService,HomepageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
