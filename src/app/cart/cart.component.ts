import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DataStorageService } from '../service/data-storage.service';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';
import { runTransaction, Transaction } from '@angular/fire/firestore';
import { AuthService } from '../service/auth.service';
import { user } from '@angular/fire/auth';
import { LoginComponent } from '../login/login.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HomeComponent,NavbarComponent,ProductDetailsComponent,ProductPageComponent,CommonModule,LoginComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  getCartData:any; 
  storeCartArray:any=[]; 
  totalAmount:number=0;
  totalCart:number=0;
  cartCount: number = 0;
constructor(private dataStorage:DataStorageService,private auth:AuthService,private router:Router,private cartservice:CartService){}
  ngOnInit(): void {
    this.getCartData=this.dataStorage.getCartData();
    this.totalCart= this.getCartData ? this.getCartData.length : 0;
   this.totalCart = this.getCartData.length;

    if(this.getCartData){
      this.getCartData.filter((ele:any) =>
        {
          this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
        });
    }
  
  }
 /* checkUserStatus() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userEmail = user.email;
      const userUid = user.uid;

      // Compare email and UID
      if (userEmail === userUid) {
       this.totalCart = this.getCartData.length;
      }
      else{
        this.totalCart = 0;
      }
    }
  }*/
  removeCart(data:any){
    this.totalAmount=0;
    this.totalCart=0;
    localStorage.removeItem('cart-data');
    this.storeCartArray = [];
    this.getCartData.filter((ele:any) =>{
        if(ele.pdId != data.pdId ){
          this.storeCartArray.push(ele);
          this.totalAmount = ele.pdPrice  + this.totalAmount
         }
    });
    this.dataStorage.storeCartData(this.storeCartArray);
    this.getCartData = this.dataStorage.getCartData();
    this.totalCart = this.getCartData.length;
  }
    
  plusMinusCount(data:any,type:any){
    this.storeCartArray=[];
    var plusMinusValue = data.plusMinusCounter;
    this.totalAmount = 0;
    if(type == 'minus'){
      let minusCount = plusMinusValue - 1;
      this.getCartData.filter((ele:any)=>{
        if(data.pdId == ele.pdId){
           ele['plusMinusCounter']=minusCount;
        }
        this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
   
      });
      this.storeCartArray=this.getCartData;
      this.dataStorage.storeCartData(this.storeCartArray);
      this.getCartData=this.dataStorage.getCartData();
    }
    if(type == 'plus'){
      let minusCount = plusMinusValue + 1;
      this.getCartData.filter((ele:any)=>{
        if(data.pdId == ele.pdId){
           ele['plusMinusCounter']=minusCount;
        }
        this.totalAmount = ele.pdPrice * ele.plusMinusCounter + this.totalAmount;
      });
      this.storeCartArray=this.getCartData;
      this.dataStorage.storeCartData(this.storeCartArray);
      this.getCartData=this.dataStorage.getCartData();
    }
  }
orderClick() {
  localStorage.removeItem('cart-data');

  Swal.fire({
    title: 'Success!',
    text: 'Your order placed successfully!',
    icon: 'success',
    confirmButtonText: 'OK'
  }).then(() => {
    this.router.navigate(['/home']);
  });
}
}
