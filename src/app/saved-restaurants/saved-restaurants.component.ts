import { Component, OnInit } from '@angular/core';
import { SavedRestaurantsService } from '../api.services/saved-restuarants.service';

@Component({
  selector: 'app-saved-restaurants',
  standalone:false,
  templateUrl: './saved-restaurants.component.html',
  styleUrl: './saved-restaurants.component.css'
})
export class SavedRestaurantsComponent implements OnInit{
   savedRestaurants: any[] = [];

  constructor(private savedService: SavedRestaurantsService) {}

  ngOnInit(): void {
    this.savedService.getSavedRestaurants().subscribe((data) => {
      this.savedRestaurants = data;
    });

    this.savedService.fetchSavedRestaurants(); // Load on component init
  }
  isSaved(restaurantId: string): boolean {
    return this.savedRestaurants.some(item => item.restaurantId === restaurantId);
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
