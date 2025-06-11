import { Component, OnInit } from '@angular/core';
import { RestaurantlistService } from '../api.services/restaurantlist.service';
import { ActivatedRoute } from '@angular/router';
import { Dishes, restaurants } from '../model';

@Component({
  selector: 'app-dishes',
 standalone:false,
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.css'
})
export class DishesComponent implements OnInit {
   selectedRestaurantId: string| null = null;
   restaurants:restaurants[]=[]
   selectedRestaurant:restaurants|undefined
   dishes:Dishes|undefined
  
constructor(private restaurantlistService:RestaurantlistService, private route: ActivatedRoute){}

 ngOnInit(): void {
  this.restaurantlistService.getRestaurants().subscribe((data) => {
    this.restaurants = data;

    const idParam = this.route.snapshot.paramMap.get('id');
    this.selectedRestaurantId = idParam;

    console.log(this.selectedRestaurantId);

    if (this.selectedRestaurantId) {
      const matchedRestaurant = this.restaurants.find(restaurant => restaurant._id === this.selectedRestaurantId);
      console.log(matchedRestaurant); 
      this.selectedRestaurant=matchedRestaurant 

      
    
      
      
    }
    
  });
}
selectedDish:any=null;
openAddToCart=false
selectDish(dish:any){
this.selectedDish={
  ...dish,
  restaurantId:this.selectedRestaurantId,
  restaurantName:this.selectedRestaurant?.name,
  address:this.selectedRestaurant?.address,
  rating:this.selectedRestaurant?.rating
}

this.openAddToCart=true;

}
onCloseAddToCart(){
  this.openAddToCart=false;
}


}
