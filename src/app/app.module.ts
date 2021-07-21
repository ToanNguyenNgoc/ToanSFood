import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {MatButtonModule} from '@angular/material/button';
import { SearchingComponent } from './searching/searching.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { CartComponent } from './cart/cart.component';
import { AddCartSuccessComponent } from './add-cart-success/add-cart-success.component';
import { ProductTagComponent } from './product-tag/product-tag.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';

@NgModule({
  declarations: [															
    AppComponent,
      HomeComponent,
      BannerComponent,
      HeaderComponent,
      ContainerComponent,
      NavMenuComponent,
      ProductListComponent,
      ProductDetailsComponent,
      SearchingComponent,
      CartComponent,
      AddCartSuccessComponent,
      ProductTagComponent,
      FooterComponent,
      LoginComponent,
      PaymentComponent,
      PaymentSuccessComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    NgxPaginationModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
