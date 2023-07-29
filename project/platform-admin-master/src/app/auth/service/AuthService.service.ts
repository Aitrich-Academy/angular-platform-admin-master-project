import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string): boolean {
    // Perform your login logic here, such as checking against hard-coded values
    if (email === 'admin' && password === 'pass') {
      return true; // Successful login
    } else {
      return false; // Invalid credentials
    }
  }
}
