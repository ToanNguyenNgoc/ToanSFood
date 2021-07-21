import { Component, Input, OnInit } from '@angular/core';
import { Tags } from '../models/tags';
import { FoodServiceService } from '../services/food-service.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  tags: Tags[]=[];
  constructor(
    public service: FoodServiceService
  ) { }

  ngOnInit() {
    this.tags = this.service.getAllTags();
  }

}
