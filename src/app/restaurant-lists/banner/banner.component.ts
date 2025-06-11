import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone:false,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  banner=[
    {name:"Orders",src:"assets/orders.png" ,link:"/order" },{name:"Saved Restaurants" ,src:"assets/saved.png" ,link:"/saved"},{name:"top5 Restarants",src:"assets/top5.jpg" ,link:"/topRestaurants"}
  ]
}
