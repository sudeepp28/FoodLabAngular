import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../api.services/cart.service';
import { OrderService } from '../../api.services/order.Service';
import {  Router } from '@angular/router';
// import { RestaurantlistService } from '../../api.services/restaurantlist.service';

@Component({
  selector: 'app-order-cart',
  standalone:false,
  templateUrl: './order-cart.component.html',
  styleUrl: './order-cart.component.css'
})
export class OrderCartComponent {
@Input() bill:any
@Input() cartItems:any[]=[]
@Output() orderPlaced=new EventEmitter()
@Output() close=new EventEmitter<any>()


constructor(private cartService:CartService ,private orderService:OrderService, private router:Router ){}
onClose(){
this.close.emit()
}

 onOrderPlaced() {
    if (!this.cartItems.length) return;

    const orderPayload = {
      items: this.cartItems,
      total: this.bill.toPay,
      placedAt: new Date().toISOString(),
     
    };

    this.orderService.addInOrders(orderPayload).subscribe({
      next: () => {
        this.cartService.clearCart().subscribe({
          next: () => {
            this.cartItems.length = 0;
            alert('Order placed successfully!');

            this.orderPlaced.emit(); 
            this.router.navigate([''])
          },
          error: (err) => console.error('Clear cart failed', err)
        });
      },
      error: (err) => console.error('Place order failed', err)
    });
  }
}

