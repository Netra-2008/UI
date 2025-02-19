import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
