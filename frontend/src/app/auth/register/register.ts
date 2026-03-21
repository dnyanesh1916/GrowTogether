import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  name = '';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}


  onRegister() {
    const user = { name: this.name, email: this.email, password: this.password };
    if(!this.name || !this.email || !this.password) {
      alert('Please fill in all fields!');
      return;
    }
    this.http.post('http://localhost:8080/api/register', user).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        alert('Registration successful!');
        this.router.navigate(['/login']); // Redirect to login page on success
      },
      error: (error) => {
        console.error('Registration failed:', error);
        alert('Registration failed!');
      }
    });
  }

  goToLogin() {
    // Logic to navigate to the login page
    // For example, you can use Angular's Router to navigate to the login page
    // this.router.navigate(['/login']);
    this.router.navigate(['/login']);
  }
}
