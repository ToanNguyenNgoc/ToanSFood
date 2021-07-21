import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../models/food';
import { FoodServiceService } from '../services/food-service.service';
import * as sort from 'lodash';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  foods: Food[]=[];
  page: number=1;
  constructor(
    public service: FoodServiceService,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      if(params.searchTerm){
        this.foods = this.service.getAll().filter(food=>
          food.name.toLowerCase().includes(params.searchTerm.toLowerCase()))
      }else if(params.tag){
        this.foods = this.service.getFoodByTag(params.tag);
      }
      else{
        this.foods = this.service.getAll();
        console.log(this.foods);
      }
    })
  }
  sortProductByPrice(dir: string){
    if(dir=='up'){
      this.foods = sort.orderBy(this.foods,['discount'],['asc']);
    }else{
      this.foods = sort.orderBy(this.foods,['discount'],['desc']);
    }
  }

}
