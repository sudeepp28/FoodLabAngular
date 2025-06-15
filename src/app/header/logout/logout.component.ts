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
  

  constructor(private authService:AuthService,private router:Router){}
  user:any | null
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
  iscloseLogout(){
    this.close.emit()
  }
}
