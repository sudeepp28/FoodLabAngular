import { Component } from '@angular/core';
import { SearchService } from '../api.services/search.service';
import { Router } from '@angular/router';
import { AuthService } from '../api.services/author.Service';

@Component({
  selector: 'app-header',
  standalone:false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor( private searchService:SearchService , private router:Router, private authService:AuthService){}
showDropdown = false;
isloggedIn=false;
searchedInput=""
islogout=false
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
 openlogout(): void {
    this.islogout=true
    this.showDropdown=false
  }
  onclose(){
    this.islogout=false
  }
  
}
