import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  email: string = '';
  password: string = '';
  constructor(private auth:AuthService){}
ngOnInit(): void {
  
}
 async register(){
  try {
    await this.auth.register(this.email, this.password);
    alert('Registration successful! Check your email for verification.');
  } catch (error) {
    console.error('Error during registration:', error);
  }
  if(this.email == ''){
    alert('please enter email');
    return;
  }
  if(this.password == ''){
    alert('please enter password');
  }
  this.auth.register(this.email,this.password);
  this.email = '';
  this.password = '';
}
  
}

