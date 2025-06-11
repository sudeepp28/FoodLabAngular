import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../api.services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  standalone:false,
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.css'
})
export class AddToCartComponent implements OnInit {
@Input() dish:any;
@Output() close= new EventEmitter<any>()

selectedPrices:any
price:number=0;
totalQuantity:number=1

constructor(private cartService:CartService){}
ngOnInit(): void {

  this.selectedPrices=this.dish.prices[0]
  
}
onClose(){
  this.close.emit()
}
decrease(){
  if(this.totalQuantity>1){
    this.totalQuantity--
  }
}
increase(){
  this.totalQuantity++
}
addToCart(){
const cartData={
  restaurantName:this.dish.restaurantName,
  restaurantId:this.dish.restaurantId,
   name: this.dish.name,
   imgUrl:this.dish.imgUrl,
      address: this.dish.address,
      rating: this.dish.rating,
      Quantity: this.totalQuantity,
      ...this.selectedPrices
}

this.cartService.addToCart(cartData)


  this.close.emit()
  alert(`${cartData.name} is added to FoodCart`)
}

}
