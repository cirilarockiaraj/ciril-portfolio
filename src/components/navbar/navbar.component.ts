import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../app/services/api.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
  navBarItems:any;

  constructor(private apiService: ApiService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    this.apiService.get('home').subscribe((data) => {
      this.navBarItems = data;
    });
  }
}
