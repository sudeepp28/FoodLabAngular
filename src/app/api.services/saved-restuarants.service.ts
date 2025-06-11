import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({providedIn:'root'})


export class SavedRestaurantsService{

   

    apiUrl="https://node-js-wnil.onrender.com/saved"
 constructor(private http: HttpClient) {}

 private savedRestaurants$ = new BehaviorSubject<any[]>([]);

  

  loadSavedRestaurants() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.savedRestaurants$.next(data);
    });
  }

  getSavedRestaurants(): Observable<any[]> {
    return this.savedRestaurants$.asObservable();
  }

  isSaved(id: string): boolean {
    return this.savedRestaurants$.value.some(r => r._id === id);
  }

  saveRestaurant(restaurant: any): Observable<any> {
    return this.http.post(this.apiUrl, restaurant);
  }

  unsaveRestaurant(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  toggleSave(restaurant: any) {
    if (this.isSaved(restaurant._id)) {
      this.unsaveRestaurant(restaurant._id).subscribe(() => this.loadSavedRestaurants());
    } else {
      this.saveRestaurant(restaurant).subscribe(() => this.loadSavedRestaurants());
    }
  }
}