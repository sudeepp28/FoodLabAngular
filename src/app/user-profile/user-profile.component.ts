import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone:false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
user:any | null
userProfile:any
constructor(private http:HttpClient){}

ngOnInit(): void {
 
this.getprofileData()
}
getprofileData(){

     const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user._id;
   

    this.http.get<any[]>('https://node-js-wnil.onrender.com/profile').subscribe((data)=>{
      const allProfiles=data
      console.log(allProfiles)

      this.userProfile=data.find(d=>d.userId===userId)
    })
  }
}
