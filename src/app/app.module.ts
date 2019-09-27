import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { HttpClientModule } from '@angular/common/http';
import { DetailsPageComponent } from './details-page/details-page.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderFinalizationComponent } from './order-finalization/order-finalization.component';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    SignInComponent,
    DetailsPageComponent,
    CartComponent,
    CheckoutComponent,
    OrderFinalizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
