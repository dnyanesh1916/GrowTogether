import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient,private router: Router) {}

  onLogin() {
    const user = { email: this.email, password: this.password };
    this.http.post('http://localhost:8080/api/login', user).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        alert('Login successful!');
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Login failed!');
        this.router.navigate(['/home']); // Redirect to login page on failure
      }
    });
  }

  goToRegister() {
    // Logic to navigate to the registration page
    this.router.navigate(['/register']);
  }
}
