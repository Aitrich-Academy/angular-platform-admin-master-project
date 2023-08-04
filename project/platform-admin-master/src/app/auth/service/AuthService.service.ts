import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isloggedin: boolean= false;
  
  login(email: string, password: string): boolean {
    // Perform your login logic here, such as checking against hard-coded values
    if (email === 'admin' && password === 'pass') {
      return true; // Successful login
    } else {
      return false; // Invalid credentials
    }
  }

  logout(): void {
    this.isloggedin = false;
  }

  isAuthenticated(): boolean {
    return this.isloggedin;
  }
}
