import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { ProductPageComponent } from '../product-page/product-page.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { ActivatedRoute, RouterLink, RouterModule,Router} from '@angular/router';
import { GetDataService } from '../service/get-data.service';
import { DataStorageService } from '../service/data-storage.service';
import { FasionComponent } from '../fasion/fasion.component';
import { FurnitureComponent } from '../furniture/furniture.component';
import { ApplianceComponent } from '../appliance/appliance.component';
import { ToysComponent } from '../toys/toys.component';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NavbarComponent,HomeComponent,ProductPageComponent,CommonModule,CartComponent,RouterModule,RouterLink,FasionComponent,FurnitureComponent,ApplianceComponent,ToysComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  constructor(private route:ActivatedRoute,private getData:GetDataService,private dataStorage:DataStorageService,private router:Router,private cartservice:CartService){}
  getParamValue:any;
  getProductDetails:any;
  storeCartData:any=[];
  inCart:boolean=false;
  
  
  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('id');
    var getVal = this.dataStorage.getCartData();
    this.storeCartData = getVal ? getVal : [];
  
    this.getData.productData.filter((ele:any) => {
      if(ele.pdId == this.getParamValue)
      {
        this.getProductDetails = ele;
      }
     
      
    });
        this.storeCartData.filter((ele:any) =>{
          if(ele.pdId == this.getParamValue){
            this.inCart = true;
          }
        }
        )
  
  
    }
    addCart(data:any){
      data['plusMinusCounter']=1;
      this.storeCartData.push(data);
      this.dataStorage.storeCartData(this.storeCartData);
      this.router.navigate(['/cart'] );
  
    }
     
  
  }
  
