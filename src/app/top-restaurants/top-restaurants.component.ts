import { Component, OnInit } from '@angular/core';
import { RestaurantlistService } from '../api.services/restaurantlist.service';

@Component({
  selector: 'app-top-restaurants',
  standalone:false,
  templateUrl: './top-restaurants.component.html',
  styleUrl: './top-restaurants.component.css'
})
export class TopRestaurantsComponent implements OnInit{
constructor(private restaurantlistService: RestaurantlistService){}
top5Restaurant:any[]=[]

ngOnInit(): void {
  this.topRestaurant()
}

topRestaurant(){
  this.restaurantlistService.getRestaurants().subscribe((data)=>{
let restaurants=data
let stack:any[]=[]

restaurants.sort((a:any,b:any)=>b.rating-a.rating)


for(let i=0;i<5;i++){
  stack.push(restaurants[i])
}
this.top5Restaurant=[...stack]
console.log(this.top5Restaurant)
  })
}
}
