import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone:false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router:Router, private http:HttpClient){}
  user:any | null
  isLogout=false
  userProfile:any
ngOnInit(): void {
  const storedUser:any=localStorage.getItem('user')
this.user=JSON.parse(storedUser)
this.user.name= this.user.name.charAt(0).toUpperCase()+this.user.name.slice(1).toLowerCase()
this.getprofileData()
}
@Output() close=new EventEmitter()
onClose(){
  this.close.emit()
}
goToRoute(route:any){
this.router.navigate([`/${route}`])
this.close.emit()
}
Openlogout(){
this.isLogout=true
}
openUserProfile(){
  this.router.navigate(['/user'])
  this.close.emit()
}

getprofileData(){

     const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user._id;
   

    this.http.get<any[]>('http://localhost:5000/profile').subscribe((data)=>{
      const allProfiles=data
      console.log(allProfiles)

      this.userProfile=data.find(d=>d.userId===userId)
      this.userProfile.name= this.userProfile.name.charAt(0).toUpperCase()+this.user.name.slice(1).toLowerCase()
    })
  }

}
