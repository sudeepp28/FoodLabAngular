import { Component, OnInit } from '@angular/core';
import { SavedRestaurantsService } from '../api.services/saved-restuarants.service';

@Component({
  selector: 'app-saved-restaurants',
  standalone:false,
  templateUrl: './saved-restaurants.component.html',
  styleUrl: './saved-restaurants.component.css'
})
export class SavedRestaurantsComponent implements OnInit{
  constructor(private savedRestaurantsService: SavedRestaurantsService){}
savedRestaurants:any[]=[]

ngOnInit(): void {
  this.savedRestaurantsService.getSavedRestaurants().subscribe((data)=>{
    this.savedRestaurants=data
  })
}

}
