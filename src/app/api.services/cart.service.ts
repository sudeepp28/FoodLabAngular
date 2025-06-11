import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})

export class CartService{

    constructor(private http:HttpClient){}
    url="https://node-js-wnil.onrender.com/cart"

    getCart():Observable<any>{
        return this.http.get<any>(this.url)
    }
     addToCart(newDish: any): void {
  this.http.get<any[]>(this.url).subscribe(cartItems => {
    if (cartItems.length > 0) {
      const existingRestaurantId = cartItems[0].restaurantId;

      if (existingRestaurantId !== newDish.restaurantId) {
        // 🧹 Clear cart if from a different restaurant
        this.clearCart().subscribe(() => {
          this.http.post(this.url, newDish).subscribe(res => {
            console.log('Dish added after clearing cart', res);
          });
        });
      } else {
        // ➕ Always add the new dish (no merge)
        this.http.post(this.url, newDish).subscribe(res => {
          console.log('New dish added to cart (no merge)', res);
        });
      }
    } else {
      // 🛒 Cart is empty - just add
      this.http.post(this.url, newDish).subscribe(res => {
        console.log('Dish added to empty cart', res);
      });
    }
  });
}

updateItem(id:any,updatedDish:any){
    return this.http.put<any>(`${this.url}/${id}`,updatedDish)
}


  deleteItem(_id:any){
    return this.http.delete<any>(`${this.url}/${_id}`)
  }

  clearCart(){
    return this.http.delete<any>(`${this.url}/delete`);
  }
}