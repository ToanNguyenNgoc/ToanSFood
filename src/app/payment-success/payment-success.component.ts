import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      this.close();
    },2000)
  }
  close(){
    this.dialog.closeAll();
  }

}
