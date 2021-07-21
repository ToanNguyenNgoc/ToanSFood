import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-cart-success',
  templateUrl: './add-cart-success.component.html',
  styleUrls: ['./add-cart-success.component.scss']
})
export class AddCartSuccessComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      this.close();
    },1500)
  }
  close(){
    this.dialog.closeAll();
  }

}
