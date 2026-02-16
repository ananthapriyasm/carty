import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appliance',
  standalone: true,
  imports: [NavbarComponent,HomeComponent,ProductDetailsComponent,ProductPageComponent,CommonModule,RouterLink],
  templateUrl: './appliance.component.html',
  styleUrl: './appliance.component.scss'
})
export class ApplianceComponent implements OnInit {
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
