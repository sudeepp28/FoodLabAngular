import { Component, OnInit } from '@angular/core';
import { RestaurantlistService } from '../api.services/restaurantlist.service';
import { restaurants } from '../model';
import { SavedRestaurantsService } from '../api.services/saved-restuarants.service';

@Component({
  selector: 'app-restaurant-lists',
 standalone:false,
  templateUrl: './restaurant-lists.component.html',
  styleUrl: './restaurant-lists.component.css'
})
export class RestaurantListsComponent implements OnInit{
  restaurants: any[] = [];
  savedRestaurantIds: string[] = [];

  constructor(
    private restaurantService: RestaurantlistService,
    private savedService: SavedRestaurantsService
  ) {}

  ngOnInit(): void {
    this.loadRestaurants();
    this.savedService.loadSavedRestaurants();

    this.savedService.getSavedRestaurants().subscribe(saved => {
      this.savedRestaurantIds = saved.map(r => r._id);
    });
  }

  loadRestaurants() {
    this.restaurantService.getRestaurants().subscribe(data => {
      this.restaurants = data;
    });
  }

  toggleSave(restaurant: any) {
    this.savedService.toggleSave(restaurant);
  }

  isSaved(id: string): boolean {
    return this.savedRestaurantIds.includes(id);
  }

  

  
}
