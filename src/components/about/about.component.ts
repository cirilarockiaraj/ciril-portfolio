import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ApiService } from '../../app/services/api.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule, ImageModule, ProgressSpinnerModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  imageLoaded = true;
  aboutPageData:any;

  constructor(private apiService: ApiService) {}

  onImageLoad(): void {
    this.imageLoaded = false;
  }

  ngOnInit() {
    this.apiService.get('about').subscribe((data) => {
      this.aboutPageData = data;
    });
  }
}
