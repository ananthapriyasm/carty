import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductPageComponent } from '../product-page/product-page.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { FasionComponent } from '../fasion/fasion.component';
import { AuthService } from '../service/auth.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterLink,ProductPageComponent,ProductDetailsComponent,FasionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  cartItems:any[]=[];
  bannerImgs=[
    {
      id:1,
      img:"../../assets/images/banner/ef637eb93bf1a887.webp",
    },
    {
      id:2,
      img:'../../assets/images/banner/9021283f0be266c1.webp',
    },
    {
      id:3,
      img:'../../assets/images/banner/7dcc28ed89760319.webp',
    },
  ];
  getCategorisData:any;
  getApplianceProductData:any=[];
  getFashionProductData:any=[];

  constructor(private getData:GetDataService ,private auth:AuthService,private cartService:CartService){}
  ngOnInit(): void {
    this.getCategorisData = this.getData.catagoriesData;

    this.getData.productData.filter((ele:any) =>{
      if(ele.pdCategory=="appliances")
      {
        this.getApplianceProductData.push(ele);
      }
      if(ele.pdCategory=="fashion")
        {
          this.getFashionProductData.push(ele);
        }
    });
  }
  }
    
