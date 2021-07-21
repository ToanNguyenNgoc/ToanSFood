import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parseInt } from 'lodash';
import { Food } from '../models/food';
import { CartCommonService } from '../services/cart-common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList: Food[]=[];
  totalPrice: number=0;
  totalItem:number=0;
  constructor(
    public cartCommon: CartCommonService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getCartList();
  }
  getCartList(){
    if(localStorage.getItem('LocalCart')){
      this.cartList = JSON.parse(`${localStorage.getItem('LocalCart')}`);
      this.totalItem = this.cartList.length;
      this.cartCommon.cartSubject.next(this.totalItem);
      this.totalPrice = this.cartList.reduce(function (acc:any, val:any){
        return acc += (val.quantity * val.discount);
      },0);
    }
  }
  inc(id: number, quantity: number){
    for(let i=0; i< this.cartList.length; i++){
      if(this.cartList[i].id=== id){
        this.cartList[i].quantity = quantity+ 1;
      }
    }
    localStorage.setItem('LocalCart', JSON.stringify(this.cartList));
    this.getCartList();
  }
  des(id: number, quantity: number){
    for(let i=0; i< this.cartList.length; i++){
      if(this.cartList[i].id=== id){
        if(quantity>1){
          this.cartList[i].quantity = quantity - 1;
        }
      }
    }
    localStorage.setItem('LocalCart', JSON.stringify(this.cartList));
    this.getCartList();
  }
  delete(id: number){
    console.log(id);
    if(localStorage.getItem('LocalCart')){
      this.cartList= JSON.parse(`${localStorage.getItem('LocalCart')}`);
      for(let i=0; i< this.cartList.length; i++){
        if(this.cartList[i].id=== id){
          this.cartList.splice(i, 1);
          localStorage.setItem('LocalCart', JSON.stringify(this.cartList));
        }
      }
    }
    this.getCartList();
  }
  payment(){
    this.router.navigateByUrl('/payment');
    this.cartCommon.totalPayment.next(this.totalPrice);
  }
}
