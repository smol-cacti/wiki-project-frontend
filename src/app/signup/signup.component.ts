import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent  {
  constructor(private router: Router) { }

  isToastVisible = false;
  showToast() {
    console.log('Button clicked!');
    
    this.isToastVisible = true;
    setTimeout(() => {this.isToastVisible = false;}, 2000); // Hide the toast after 3 seconds
    setTimeout(() => {this.router.navigate(['/login']); }, 2300); // Delay of 3 seconds
  }
}