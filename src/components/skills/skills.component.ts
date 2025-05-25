import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../app/services/api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills',
  imports: [
    ProgressBarModule,
    ToastModule,
    NgbProgressbarModule,
    CommonModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills: any;
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.get('skills').subscribe((data) => {
      this.skills = data;
    });
  }
}
