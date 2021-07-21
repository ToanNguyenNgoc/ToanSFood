import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tag',
  templateUrl: './product-tag.component.html',
  styleUrls: ['./product-tag.component.scss']
})
export class ProductTagComponent implements OnInit {
  @Input() foodTag !: string[];
  constructor() { }

  ngOnInit() {
  }

}
