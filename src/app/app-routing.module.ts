import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartCommonService } from './services/cart-common.service';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'category/:tag', component: HomeComponent},
  {path:'product-details/:name', component: ProductDetailsComponent},
  {path:'cart', component: CartComponent},
  {path:'login', component:LoginComponent},
  {path:'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
