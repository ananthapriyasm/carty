import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-fasion',
  standalone: true,
  imports: [NavbarComponent,HomeComponent,ProductPageComponent,CommonModule,CartComponent,RouterModule,RouterLink,ProductDetailsComponent],
  templateUrl:'./fasion.component.html',
  styleUrl:'./fasion.component.scss'
  
})
export class FasionComponent implements OnInit {
  getParamValue : any;
  getProductData:any=[];
  getSubCategoryOption: any[] = [];
  filterProductData: any[] = [];
  

  constructor(private getData:GetDataService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getParamValue=this.route.snapshot.paramMap.get('name');
    this.getData.productData.forEach((ele:any)=>{
       if(ele.pdCategory == this.getParamValue){
        
         this.getProductData.push(ele);
      
       }
     });
     this.filterProductData = [...this.getProductData]

     this.getData.subCatagorisFilterData.forEach((ele:any)=>{
       if(ele.categories == this.getParamValue){
         this.getSubCategoryOption.push(ele);
         console.log(this.getSubCategoryOption, 'SubCategory Options');
       }
     })
   
   
     }
     
     filterSelect(data: any) {
       this.filterProductData = [];
       const getFilterValue  = data.target.value;
       console.log(getFilterValue, 'getFilterValue');
   
       if (getFilterValue != 'all') {
         this.getData.productData.filter((ele: any) => {
           if (ele.pdSubCategory == getFilterValue) {
             this.filterProductData.push(ele);
           }
         });
       } else {
         this.filterProductData = this.getProductData;
         console.log(this.filterProductData, 'Filtered Product Data');
       }
     }
  }