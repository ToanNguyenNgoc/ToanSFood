import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { parseInt } from 'lodash';
import { AddCartSuccessComponent } from '../add-cart-success/add-cart-success.component';
import { Food } from '../models/food';
import { CartCommonService } from '../services/cart-common.service';
import { FoodServiceService } from '../services/food-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  food !: Food;
  foods:Food[]=[];
  page: number=1;
  constructor(
    public service: FoodServiceService,
    public cartCommon: CartCommonService,
    public activatedRoute: ActivatedRoute,
    public route: Router,
    public dialog: MatDialog,
  ) { 
    activatedRoute.params.subscribe((params)=>{
      this.food = this.service.getFoodById(params.name);
    })
  }

  ngOnInit() {
    this.getListFood();
  }
  inc(food: Food){
   food.quantity += 1;
  }
  dec(food: Food){
    if(food.quantity > 1){
      food.quantity -= 1;
    }
  }
  getListFood(){
   this.foods=  this.service.getAll();
  }
  itemsCart:any[]=[];
  handlerAddToOrder(food: any){
    console.log(food);
    let cartDataNull= localStorage.getItem('LocalCart');
    if(cartDataNull==null){
      let storeData:any=[]=[];
      storeData.push(food);
      localStorage.setItem('LocalCart', JSON.stringify(storeData));
    }else{
      var id= food.id;
      let index: number=-1;
      this.itemsCart = JSON.parse(`${localStorage.getItem('LocalCart')}`);
      for(let i=0; i< this.itemsCart.length; i++){
        if(parseInt(id)===parseInt(this.itemsCart[i].id)){
          this.itemsCart[i].quantity = food.quantity;
          index=i;
          break;
        }
      }
      if(index==-1){
        this.itemsCart.push(food);
        localStorage.setItem('LocalCart', JSON.stringify(this.itemsCart));
      }else{
        localStorage.setItem('LocalCart', JSON.stringify(this.itemsCart));
      }
    }
    this.cartNumberFunc();
  }
  addToOrder(food:any){
    this.handlerAddToOrder(food);
    this.dialog.open(AddCartSuccessComponent);
  }
  buyNow(food:any){
    this.handlerAddToOrder(food);
    this.route.navigateByUrl('/cart');
  }
  cartNumber: number=0;
  cartNumberFunc(){
    var cartValue = JSON.parse(`${localStorage.getItem('LocalCart')}`);
    this.cartNumber = cartValue.length;
    this.cartCommon.cartSubject.next(this.cartNumber);
    console.log(this.cartNumber);
  }
}
