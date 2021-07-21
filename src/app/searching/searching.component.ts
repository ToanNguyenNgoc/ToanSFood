import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodServiceService } from '../services/food-service.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnInit {
  searchTerm: string ='';
  constructor(
    public activatedRoute: ActivatedRoute,
    public route: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      if(params.searchTerm){
        this.searchTerm = params.searchTerm;
      }
    })
  }
  search(){
    this.route.navigateByUrl('/search/'+ this.searchTerm);
  }

}
