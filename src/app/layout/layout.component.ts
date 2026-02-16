import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,HomeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{
  signupUsers:any[]=[];
  loginObj:any = {
    userName:'',
    password:''
   };
   constructor(){}
  
   ngOnInit():void{
    const localData = localStorage.getItem('signUpUser');
    if(localData!=null){
      this.signupUsers = JSON.parse(localData);
    }
   }
   onLogin(){
    debugger
    const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if (isUserExist != undefined){
      alert('user Login successfully');
    }
    else{
      alert('wrong crendentials');
    }
   

 }
 
}
