import { Component, OnInit } from '@angular/core';
import { SearchService } from '../api.services/search.service';
import { Router } from '@angular/router';
import { AuthService } from '../api.services/author.Service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor( private searchService:SearchService , private router:Router, private authService:AuthService, private http:HttpClient){}
showDropdown = false;
isloggedIn=false;
searchedInput=""
islogout=false
isSideBar=false
userProfile:any
isShowDropDown(){
  this.showDropdown=!this.showDropdown
  this.isloggedIn=this.authService.isLoggedIn()
}
onSearch(){
  this.searchService.setdata(this.searchedInput)
 if(this.searchedInput){
   this.router.navigate(['/search'])
 }
}
user:any | null
ngOnInit(): void {
  const storedUser:any=localStorage.getItem('user')
this.user=JSON.parse(storedUser)
this.user.name= this.user.name.charAt(0).toUpperCase()+this.user.name.slice(1).toLowerCase()

this.getprofileData()
}
 

 openlogout(): void {
    this.islogout=true
    this.showDropdown=false
  }
  openSidebar(){
    this.isSideBar=true
     this.showDropdown=false
  }
  oncloseLogout(){
    this.islogout=false
    this.onCloseSideBar()
    
  }
  onCloseSideBar(){
    this.isSideBar=false
  }
  getprofileData(){

     const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user._id;
    

    this.http.get<any[]>('http://localhost:5000/profile').subscribe((data)=>{
      const allProfiles=data
     

      this.userProfile=data.find(d=>d.userId===userId)
      this.userProfile.name=this.userProfile.name.charAt(0).toUpperCase()+this.user.name.slice(1).toLowerCase()
     
    })
  }
  
}
