import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
 


  constructor(private firestore:Firestore,private fireAuth:AngularFireAuth) { }

 async storeCartData(data:any){
 
    let cartData =JSON.stringify(data);
    localStorage.setItem('cart-data',cartData);
  
}
  getCartData(){
    
    let getData:any = localStorage.getItem('cart-data');
    return JSON.parse(getData);
  }

}

