import { Component, OnInit } from '@angular/core';
import { OrderService } from '../api.services/order.Service';
import { RestaurantlistService } from '../api.services/restaurantlist.service';

@Component({
  selector: 'app-orders',
  standalone:false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {
constructor(private orderService:OrderService ){}

orderItems:any[]=[]

ngOnInit(): void {
  
  this.orderService.getOrders().subscribe((data)=>{
    this.orderItems=data.reverse()
    console.log(this.orderItems)
  })

 

}
}
