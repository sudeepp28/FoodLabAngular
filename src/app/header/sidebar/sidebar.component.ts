import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone:false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router:Router){}
  user:any | null
  isLogout=false
ngOnInit(): void {
  const storedUser:any=localStorage.getItem('user')
this.user=JSON.parse(storedUser)
this.user.name= this.user.name.charAt(0).toUpperCase()+this.user.name.slice(1).toLowerCase()
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

}
