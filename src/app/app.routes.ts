import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductPageComponent } from './product-page/product-page.component';

import { LoginComponent } from './login/login.component';
import { FasionComponent } from './fasion/fasion.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { ToysComponent } from './toys/toys.component';
import { RegisterComponent } from './app/register/register.component';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'home', component:HomeComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'product-page/:name',component:ProductPageComponent},
    {path:'product-details/:name/:id',component:ProductDetailsComponent},  
    {path:'cart',component:CartComponent},
    {path:'fasion/:name',component:FasionComponent},
    {path:'furniture/:name',component:FurnitureComponent},
    {path:'appliance/:name',component:ApplianceComponent},
    {path:'toys/:name',component:ToysComponent}  
];
