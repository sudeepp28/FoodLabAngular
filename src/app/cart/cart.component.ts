import { Component, OnInit } from '@angular/core';
import { CartService } from '../api.services/cart.service';
import { RestaurantlistService } from '../api.services/restaurantlist.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  cartItems: any[] = [];
  totalprice: number = 0;
  surgeFee:number=10;
  platformFee:number=10;
  Gst:number=0
  grandTotal:number=0
  amountRound:number=0
  toPay:number=0

  ngOnInit(): void {
    this.loadCart();
    
  }

  loadCart() {
    this.cartService.getCart().subscribe((data) => {
      this.cartItems = data;
      this.getTotalprice(); 
      console.log(this.cartItems)
    });
    
  }

  clearCart() {
    this.cartService.clearCart().subscribe(() => {
      this.loadCart();
    });
  }

  deleteItem(_id: any) {
    this.cartService.deleteItem(_id).subscribe(() => {
      this.loadCart();
    });
  }

  updateQuantity(item: any, change: number): void {
    const newQuantity = item.Quantity + change;

    if (newQuantity < 1) return;

    const updatedItem = { Quantity: newQuantity };

    this.cartService.updateItem(item._id, updatedItem).subscribe(res => {
      console.log('Quantity updated', res);
      this.loadCart();
    });
  }

  getTotalprice() {
    this.totalprice = 0; 
    this.cartItems.forEach((element: any) => {
      this.totalprice += element.price * element.Quantity;
      this.Gst=(this.totalprice*5.5)/100
      this.grandTotal=parseFloat((this.totalprice+this.Gst+this.surgeFee+this.platformFee).toFixed(2))
      this.toPay=Math.round(this.grandTotal)
      this.amountRound=parseFloat((this.toPay-this.grandTotal).toFixed(2))
    });
  }
  bill:any
  isOrderCart=false
openOrderCart(){
this.bill={totalprice:this.totalprice,Gst:this.Gst,surgeFee:this.surgeFee,platformFee:this.platformFee,grandTotal:this.grandTotal,toPay:this.toPay,amountRound:this.amountRound}
console.log(this.bill)
this.isOrderCart=true
}
onclose(){
  this.isOrderCart=false
}

  onOrderPlaced(){
    this.loadCart()
    this.isOrderCart=false
    
  }

  
}
