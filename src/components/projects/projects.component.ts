import { Component } from '@angular/core';
import { ApiService } from '../../app/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projectsPageData:any;
  experiencePageData:any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get('projects').subscribe((data : any) => {
      this.projectsPageData = data;
    });
    this.apiService.get('experience').subscribe((data : any) => {
      this.experiencePageData = data.professionalExperience;
    });
  }
}