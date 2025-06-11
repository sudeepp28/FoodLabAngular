import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})

export class OrderService{
    constructor(private http:HttpClient){}
url="https://node-js-wnil.onrender.com/order"
    getOrders():Observable<any>{
        return this.http.get<any>(this.url);
    }

    addInOrders(order:any):Observable<any>{
        return this.http.post<any>(this.url,order)
    }
}