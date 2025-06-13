import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../api.services/author.Service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) return;

    this.auth.login(this.loginForm.value).subscribe({
      next: (res:any) => {
        console.log(res)
        this.auth.storeToken(res.token);
        this.auth.storeUser(res.user)
        this.router.navigate(['/']); 
        alert('LoggedIn')
      },
      error: () => {
        alert('Invalid email or password');
      }
    });
  }
}
