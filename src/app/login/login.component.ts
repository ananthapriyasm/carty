import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { Router, RouterLink} from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { AuthService } from '../service/auth.service';
import { RegisterComponent } from '../app/register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HomeComponent,NavbarComponent,ProductDetailsComponent,ProductPageComponent,RouterLink,RegisterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
   totalCart:number=0;

  constructor(private router: Router,private auth:AuthService) {}
 
async login(){
  try{
    await this.auth.login(this.email, this.password);
      alert('Login successful!');
      
  }catch (error) {
    console.error('Error during login:', error);
  }
  if(this.email == ''){
    alert('please enter email');
    return;
  }
  if(this.password == ''){
    alert('please enter password');
    return;
  }
  this.auth.login(this.email,this.password);
  this.email = '';
  this.password = '';
  this.router.navigate(['/home']);
  
 
}
  
  
}

