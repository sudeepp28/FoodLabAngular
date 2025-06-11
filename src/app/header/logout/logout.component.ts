import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../api.services/author.Service';

@Component({
  selector: 'app-logout',
  standalone:false,
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  @Output() close=new EventEmitter()
  

  constructor(private authService:AuthService){}
  loggout(){
this.authService.logout()
this.iscloseLogout()

  }
  iscloseLogout(){
    this.close.emit()
  }
}
