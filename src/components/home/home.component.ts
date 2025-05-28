import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';
import { ImageModule } from 'primeng/image';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../app/services/api.service';
import { After } from 'v8';

@Component({
  selector: 'app-home',
  imports: [ImageModule, ProgressSpinnerModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('typedElement', { static: false }) typedElement!: ElementRef;

  constructor(private apiService: ApiService) {}

  homeData : any;
  ngAfterViewInit(): void {
    const options = {
      strings: this.homeData['roles'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    };

    new Typed(this.typedElement.nativeElement, options);
  }

  ngOnInit() {
    this.apiService.get('home').subscribe((data) => {
      this.homeData = data;
    });
  }

  imageUrl = 'https://1drv.ms/i/c/D914C8B334A253E0/IQQa8aG5gVnVQ5M1uGKthj8UAUTC5ttde_RDz0YaJ9lATWo';
  // ngAfterViewInit(): void {
  //   const options = {
  //     strings: ['Software Developer', 'QA Engineer', 'UI/UX Designer', 'DevOps Engineer'],
  //     typeSpeed: 60,
  //     backSpeed: 40,
  //     loop: true,
  //     showCursor: true,
  //     cursorChar: '|'
  //   };

  //   new Typed(this.typedElement.nativeElement, options);
  // }

  imageLoaded = true;

  onImageLoad(): void {
    this.imageLoaded = false;
  }
}
