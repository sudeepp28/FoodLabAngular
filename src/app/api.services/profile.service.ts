import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:"root"})

export class ProfileService{
    constructor(private http:HttpClient){}

    url="https://node-js-wnil.onrender.com"
    getprofileData():Observable<any>{
return this.http.get<any[]>(`${this.url}/profile`)
    }

    updateProfile(formData:any):Observable<any>{
return  this.http.post<any>(`${this.url}/upload`, formData)
    }
    deleteData(userId:any):Observable<any>{
return this.http.delete(`${this.url}/profile/${userId}`)
    }
}