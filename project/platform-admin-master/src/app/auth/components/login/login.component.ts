import { Component } from '@angular/core';
import { AuthService } from '../../service/AuthService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string; // Definite assignment assertion
  password: string;
  loginError: boolean;
  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.email='';
    this.password='';
    this.loginError = false;
    this.isLoggedIn = false;
  }

  login(): void {
   
    this.isLoggedIn = this.authService.login(this.email, this.password);
    this.loginError = !this.isLoggedIn;

    if (this.isLoggedIn) {
      this.router.navigate(['/admin-home/dashboard']); // Redirect to the dashboard route
    }
  }

}
