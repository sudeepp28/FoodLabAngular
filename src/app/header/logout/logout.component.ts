import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../api.services/author.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone:false,
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  @Output() close=new EventEmitter()
  

  constructor(private authService:AuthService,private router:Router ,private http:HttpClient){}
  user:any | null
  userProfile:any
ngOnInit(): void {
  const storedUser:any=localStorage.getItem('user')
this.user=JSON.parse(storedUser)
this.user.name= this.user.name.charAt(0).toUpperCase()+this.user.name.slice(1).toLowerCase()
}
  loggout(){
this.authService.logout()
this.iscloseLogout()
this.router.navigate(['/'])


  }
  getprofileData(){

     const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user._id;
   

    this.http.get<any[]>('https://node-js-wnil.onrender.com/profile').subscribe((data)=>{
      const allProfiles=data
      console.log(allProfiles)

      this.userProfile=data.find(d=>d.userId===userId)
      this.userProfile.name= this.userProfile.name.charAt(0).toUpperCase()+this.user.name.slice(1).toLowerCase()
    })
  }
  iscloseLogout(){
    this.close.emit()
  }
}
