import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { CartCommonService } from '../services/cart-common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerCartList: Food[]=[];
  constructor(
    public cartCommon: CartCommonService,
  ) { 
    this.cartCommon.cartSubject.subscribe(res=>{
      this.itemsNumber = res;
    })
  }

  ngOnInit() {
    this.cartItemsCount();
  }
  itemsNumber: number=0;
  cartItemsCount(){
    if(localStorage.getItem('LocalCart') != null){
      var cartArray= JSON.parse(`${localStorage.getItem('LocalCart')}`);
      this.headerCartList  = cartArray;
      this.itemsNumber = cartArray.length;
      this.cartCommon.cartSubject.next(this.itemsNumber);
    }
  }

}
