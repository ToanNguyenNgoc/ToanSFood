import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Food } from '../models/food';
import { PaymentSuccessComponent } from '../payment-success/payment-success.component';
import { CartCommonService } from '../services/cart-common.service';
import { FoodServiceService } from '../services/food-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  list :Food[]=[];
  fullName:string ='';
  phoneNumber:string ='';
  address:string='';
  totalPayment :number=0;
  totalItem: number=0;
  constructor(
    public cartCommon: CartCommonService,
    public service: FoodServiceService,
    public dialog:MatDialog,
  ) { 
    
  }

  ngOnInit() {
    this.getList();
  }
  getList(){
    if(localStorage.getItem('LocalCart')){
      this.list = JSON.parse(`${localStorage.getItem('LocalCart')}`);
      this.totalItem= this.list.length;
      this.totalPayment = this.list.reduce(function(acc:any, val:any){
        return acc += (val.quantity * val.discount);
      },0)
    }
  }
  submit(){
    this.dialog.open(PaymentSuccessComponent)
  }

}
