import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ApiService } from '../../app/services/api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  imports: [
    CommonModule,
    ButtonModule,
    NgxExtendedPdfViewerModule,
    ProgressSpinnerModule,
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ResumeComponent {
  downloadUrl: any;

  loading: boolean = true;
  error: boolean = false;
  resumePageData: any;
  sanitizedPdfUrl!: SafeResourceUrl;

  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.apiService.get('resume').subscribe((data: any) => {
      this.resumePageData = data;
      const fieldId = data.resumeId;
      const pdfUrl = `https://drive.google.com/file/d/${fieldId}/preview`;
      this.downloadUrl = `https://drive.google.com/uc?export=download&id=${fieldId}`;
      this.sanitizedPdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfUrl);
    });
  }

  onPdfLoad() {
    this.loading = false;
  }
  onPdfError() {
    this.loading = false;
    this.error = true;
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = this.downloadUrl+""+this.resumePageData['resumeId'];
    link.download = 'Resume.pdf'; // Specify the file name
    link.click();
  }
}
