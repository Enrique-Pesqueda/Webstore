import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderFinalizationComponent } from './order-finalization/order-finalization.component';


// This is to let angular know what component I'm refering to when 
// I'm routing the webapp in app.component.html
const routes: Routes = [
{path: '', component : HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'details-page', component: DetailsPageComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'order-finalization', component: OrderFinalizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
