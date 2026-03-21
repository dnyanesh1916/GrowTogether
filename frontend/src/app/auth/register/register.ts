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
  confirmPassword = '';


  constructor(private http: HttpClient, private router: Router) {}


//   password: ['', [
//   Validators.required,
//   Validators.minLength(8),
//   Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&]).*$')
// ]]
// email: ['', [Validators.required, Validators.email]]
// name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]]
  
validateEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }  

  onRegister() {

    const user = { name: this.name, email: this.email, password: this.password , confirmPassword: this.confirmPassword };
    
    if(!this.name || !this.email || !this.password || !this.confirmPassword) {
      alert('Please fill in all fields!');
      return;
    }

    if(this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if(this.password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }

    if(!this.validateEmail(this.email)) {
      alert('Please enter a valid email address!');
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
