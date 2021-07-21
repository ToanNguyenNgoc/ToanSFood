import { Component, OnInit } from '@angular/core';
import { FoodNew } from '../models/food-new';
import { FoodServiceService } from '../services/food-service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  foodsNew: FoodNew[]=[];
  constructor(
    public service: FoodServiceService
  ) { }

  ngOnInit() {
    this.foodsNew = this.service.getAllFoodNew();
  }

}
