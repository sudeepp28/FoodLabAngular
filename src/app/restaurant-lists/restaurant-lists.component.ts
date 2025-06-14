import { Component, OnInit } from '@angular/core';
import { RestaurantlistService } from '../api.services/restaurantlist.service';
import { SavedRestaurantsService } from '../api.services/saved-restuarants.service';
// import { SavedRestaurantsService } from '../api.services/saved-restaurants.service';

@Component({
  selector: 'app-restaurant-lists',
  standalone:false,
  templateUrl: './restaurant-lists.component.html',
  styleUrls: ['./restaurant-lists.component.css']
})
export class RestaurantListsComponent implements OnInit {
  restaurants: any[] = [];
  saved: any[] = [];

  constructor(
    private restaurantService: RestaurantlistService,
    private savedService: SavedRestaurantsService
  ) {}

  ngOnInit(): void {
    this.restaurantService.getRestaurants().subscribe((data) => {
      this.restaurants = data;
    });

    this.savedService.getSavedRestaurants().subscribe((savedList) => {
      this.saved = savedList;
    });

    this.savedService.fetchSavedRestaurants();
  }

  isSaved(restaurantId: string): boolean {
    return this.saved.some(item => item.restaurantId === restaurantId);
  }

  save(restaurant: any): void {
    const {_id, ...restaurantData}=restaurant
    const newSave={restaurantId:_id, ...restaurantData}
    console.log(newSave)
    this.savedService.saveRestaurant(newSave).subscribe({
      next: () => this.savedService.fetchSavedRestaurants(),
      error: (err) => alert(err.error.message || 'Error saving restaurant')
    });
  }

  remove(restaurantId: string): void {
    this.savedService.removeSavedRestaurant(restaurantId).subscribe({
      next: () => this.savedService.fetchSavedRestaurants(),
      error: (err) => alert(err.error.message || 'Error removing restaurant')
    });
  }
}
