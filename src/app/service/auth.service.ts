import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Firestore,doc,setDoc} from '@angular/fire/firestore';
import {  Observable } from 'rxjs';

import{map} from 'rxjs/operators';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private fireAuth:AngularFireAuth ,private router:Router,private firestore:Firestore) { }
  login(email:string,password:string){
   
    return this.fireAuth.signInWithEmailAndPassword(email, password);
   
    
     
     }
    
async register(email:string,password:string){
  
  const usercredential = await this.fireAuth.createUserWithEmailAndPassword(email,password);
  const userId = usercredential.user?.uid;
  if(userId){
  await setDoc(doc(this.firestore,'carts',userId),{items:[]});
  }
    alert('registration successfully');  
    this.router.navigate(['/login']);
    } 

 async logout(){
  
    await this.fireAuth.signOut()
   
    this.router.navigate(['/login']);
  }
  isLoggedIn(): Observable<boolean >{
    return this.fireAuth.authState.pipe(
      map(user => !!user));// Check if user is logged in
  }

 
  
  
}
