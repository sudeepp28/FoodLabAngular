import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProfileService } from '../api.services/profile.service';

@Component({
  selector: 'app-user-profile',
  standalone:false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
user:any | null
userProfile:any
constructor( private profileService:ProfileService){}

ngOnInit(): void {
 
this.getprofileData()
}
getprofileData(){

     const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user._id;
   
this.profileService.getprofileData()
    .subscribe((data)=>{
      const allProfiles=data
     

      this.userProfile=data.find((d:any)=>d.userId===userId)
    })
  }
  deleteProfilePhoto(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user._id;

   this.profileService.deleteData(userId).subscribe((data)=>{
      this.getprofileData()
      console.log(data)
    })
  }
}
