import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { FoodNew } from '../models/food-new';

import { Tags } from '../models/tags';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

constructor() { }
  
  getAll():Food[]{
    return [
      {id:1, name:'Hamburger', imgUrl:'https://product.hstatic.net/1000267048/product/h4_8441a76b3c0a48c3a8fcca9aecfeefad_master.jpg', sale:false, stars:5, price:60000, discount:50000, tags:['Fast Food'], saleCode:['1000','2000'], quantity:1, timeCook:15},
      {id:2, name:'Hamburger Cheese', imgUrl:'https://shipdoandemff.com/wp-content/uploads/2018/05/Hamburger-b%C3%B2.png', sale:true, stars:5, price:60000, discount:50000, tags:['Fast Food'], saleCode:['1000','2000'], quantity:1, timeCook:15},
      {id:3, name:'KFC', imgUrl:'https://i.pinimg.com/236x/e9/fd/83/e9fd83f1d9beb90948dea222180d13f1.jpg', sale:true, stars:4, price:80000, discount:75000, tags:['Fast Food'], saleCode:['1000','2000','3000'], quantity:1, timeCook:20},
      {id:4, name:'Hotdog', imgUrl:'https://abmauri.vn/vnt_upload/guide/04_2020/thumbs/570_crop_hinh-hotdog-pho-mai.jpg', sale:true, stars:5, price:30000, discount:25000, tags:['Fast Food'], saleCode:['1000'], quantity:1, timeCook:5},
      {id:5, name:'Double Hotdog', imgUrl:'https://lh5.googleusercontent.com/H4aZFz-YMUfKHvbotOO1DzID3-u4Vzpp3XX6PS0Kf1ooHi7i12cM0uAqbT8zRIAvxaB4M5NBFEyDRDybZsFcEjZuahkl_QFuREWHLKFhU6Ulc6D0ukllUKSxmq1By0c3gagBM3fd', sale:true, stars:5, price:70000, discount:65000, tags:['Fast Food'], saleCode:['1000','2000'], quantity:1, timeCook:10},
      {id:6, name:'Hotdog Cheese', imgUrl:'https://review.food.com.vn/wp-content/uploads/2020/10/quan-hotdog-co-chu-nguoi-han-quoc-dep-trai-4.jpg', sale:true, stars:5, price:45000, discount:40000, tags:['Fast Food'], saleCode:['1000','2000'], quantity:1, timeCook:12},
      {id:7, name:'Cappuccino Heart', imgUrl:'https://guanabana.vn/wp-content/uploads/2017/03/Cappuccino-Coffee-Latte.jpg', sale:true, stars:5, price:88000, discount:76000, tags:['Coffee'], saleCode:['1000','2000'], quantity:1, timeCook:15},
      {id:8, name:'Coffee', imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=960,872', sale:true, stars:5, price:33000, discount:32000, tags:['Coffee'], saleCode:['1000','2000'], quantity:1, timeCook:12},
      {id:9, name:'Cappuccino Egg', imgUrl:'https://images.foody.vn/res/g5/41683/s180x180/foody-espresso-cafe-697-635644595011808299.jpg', sale:true, stars:4, price:46600, discount:44000, tags:['Coffee'], saleCode:['1000','2000','3000'], quantity:1, timeCook:9},
      {id:10, name:'Cappuccino Cheese', imgUrl:'https://product.hstatic.net/1000075078/product/capu-nong_a2a47a422fa94e8194e9d4c4badba9d3_master.jpg', sale:true, stars:5, price:80000, discount:78000, tags:['Coffee'], saleCode:['1000','2000'], quantity:1, timeCook:15},
      {id:11, name:'Coffee Brown', imgUrl:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=960,872', sale:true, stars:5, price:25000, discount:24500, tags:['Coffee'], saleCode:['1000','2000'], quantity:1, timeCook:15},
      {id:12, name:'Cappuccino', imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8X0PjibD7vzZmIZYGdJgz7Yb_2WWBJnQ8YQ&usqp=CAU', sale:true, stars:4, price:80000, discount:75000, tags:['Coffee'], saleCode:['1000','2000','3000'], quantity:1, timeCook:20},
      {id:13, name:'Matcha Tea', imgUrl:'https://namphuongcoffee.com/wp-content/uploads/2020/07/tra-sua-matcha.jpg', sale:true, stars:5, price:60000, discount:58500, tags:['Milk Tea'], saleCode:['1000','2000'], quantity:1, timeCook:8},
      {id:13, name:'Matcchiato', imgUrl:'https://chinmilktea.vn/public/upload/images/hinhsanpham/chocolate-macchiato-48741616127116.JPG', sale:true, stars:5, price:75000, discount:74000, tags:['Milk Tea'], saleCode:['1000','2000'], quantity:1, timeCook:15},
      {id:13, name:'Gongcha', imgUrl:'http://gongcha.com.vn/wp-content/uploads/2018/10/Hinh-Web-OKINAWA-SUA-TUOI.png', sale:true, stars:5, price:95000, discount:94000, tags:['Milk Tea'], saleCode:['1000','2000'], quantity:1, timeCook:15},
    ]
  }
  getAllFoodNew():FoodNew[]{
    return [
      {id:1, name:'Hamburger', imgUrl:'/assets/foodImg/1.jpg', sale:false, stars:5, price:60000, discount:50000, tags:['Fast Food'], saleCode:['1000','2000'], quantity:1, timeCook:15},
      {id:2, name:'Hamburger Cheese', imgUrl:'/assets/foodImg/2.jpg', sale:true, stars:5, price:60000, discount:50000, tags:['Milk Tea'], saleCode:['1000','2000'], quantity:1, timeCook:15},
      {id:3, name:'KFC', imgUrl:'/assets/foodImg/3.jpg', sale:true, stars:4, price:80000, discount:75000, tags:['Fast Food'], saleCode:['1000','2000','3000'], quantity:1, timeCook:20},
    ]
  }
  getFoodById(name: string): Food{
    return this.getAll().find(food => food.name == name)!;
  }
  getAllTags(): Tags[]{
    return [
      {name:'Milk Tea', count: 1},
      {name:'Fast Food', count: 1},
      {name:'Coffee', count:1}
    ]
  }
  getFoodByTag(tag: string ): Food[]{
    return tag=='All' ?
    this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag)); 
  }
}
