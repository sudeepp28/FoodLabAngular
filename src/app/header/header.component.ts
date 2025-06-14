import { Component, OnInit } from '@angular/core';
import { SearchService } from '../api.services/search.service';
import { Router } from '@angular/router';
import { AuthService } from '../api.services/author.Service';

@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor( private searchService:SearchService , private router:Router, private authService:AuthService){}
showDropdown = false;
isloggedIn=false;
searchedInput=""
islogout=false
isSideBar=false
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
  
}
