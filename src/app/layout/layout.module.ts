import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OrderComponent } from './order/order.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    AboutusComponent,
    OrderComponent
  ],
  declarations: [
    HomeComponent,
    MenuComponent,
    AboutusComponent,
    OrderComponent
  ]
})
export class LayoutModule { }
