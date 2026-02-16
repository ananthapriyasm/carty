import { Injectable } from '@angular/core';
import { Firestore,collection,doc,addDoc,collectionData} from '@angular/fire/firestore';
import { GetDataService } from './get-data.service';
import { ProductData } from '../product.model';
import { Observable } from 'rxjs';
import { Item } from '../product.model';
import { AuthService } from './auth.service';
import { DataStorageService } from './data-storage.service';

/*export interface CartItem {
  productId: number;
  quantity: number;
}*/


@Injectable({
  providedIn: 'root',
})
export class CartService {}
 /*constructor(private auth:AuthService,private dataStorage:DataStorageService){}

 async addCart(data: any, userUid: string): Promise<void> {
  const currentUser = await this.auth.getCurrentUserSync();
  if (currentUser && currentUser.email === userUid) {
    data['plusMinusCounter'] = 1; // Initialize counter
    this.storeCartData.push(data); // Add item to cart
    this.dataStorage.storeCartData(this.storeCartData); // Store updated cart data
    console.log('Item added to cart successfully.');
  } else {
    console.log('Email does not match user ID. Item not added to cart.');
  }*/

 
