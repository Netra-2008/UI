import { Routes } from '@angular/router';
import { AboutusComponent } from './layout/aboutus/aboutus.component';
import { HomeComponent } from './layout/home/home.component';
import { MenuComponent } from './layout/menu/menu.component';
import { OrderComponent } from './layout/order/order.component';
import { LoginComponent } from './layout/login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'aboutus',
        component:AboutusComponent
    },
    {
        path:'menu',
        component:MenuComponent
    },
    {
        path:'order',
        component:OrderComponent
    }
    
   
];
