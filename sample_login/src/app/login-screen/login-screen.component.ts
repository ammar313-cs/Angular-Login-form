import { Component } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  user: any = {
    companyName: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    business: '',
    AT: '',
    terms: false
  };

  onSubmit() {
    console.log('Form submitted:', this.user);
    const userData = JSON.stringify(this.user.value);
    localStorage.setItem('userData', userData);
   
  }
}
