import { Component, OnInit } from '@angular/core';
import { SearchService } from '../api.services/search.service';
import { restaurants } from '../model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone:false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
constructor(private searchService:SearchService){}
SearchedRestaurants:restaurants[]=[]
query:string=""
ngOnInit(): void {
 this.loadSearchedRestaurants()
 this.searchService.currentTerm.subscribe(
  (term)=>{
    this.query=term
   if(this.query===""){
this.SearchedRestaurants=[]
   }else{
     this.searchService.search(this.query).subscribe((data)=>{
      this.SearchedRestaurants=data.result

      console.log(this.SearchedRestaurants)
    })
   }
  }
 )
}
 
loadSearchedRestaurants(){
 
}

}
