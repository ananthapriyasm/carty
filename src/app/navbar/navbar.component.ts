import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DataStorageService } from '../service/data-storage.service';
import { GetDataService } from '../service/get-data.service';
import { AuthService } from '../service/auth.service';
import { getAuth } from 'firebase/auth';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  totalCart: number = 0;
  getCartData: any[] = [];

  constructor(private dataStorage:DataStorageService,private getData:GetDataService ,private router:Router,private auth:AuthService ){}
  getVal:any;
   @Input() cartCount:number=0;
  ngOnInit(): void {
     this.getVal = this.dataStorage.getCartData();
    this.cartCount = this.getVal ? this.getVal.length : 0;
 //  this.checkUserStatus();
  }


 /* checkUserStatus() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const userEmail = user.email;
      const userUid = user.uid;

      // Compare email and UID
      if (userEmail === userUid) {
       
        this.cartCount = this.getVal.length;
       
      } else {
        this.cartCount = 0;
        // Perform action for non-matching email and UID
      }
    } 
  }*/
  register(){
    this.auth.logout();
  }
 
}

