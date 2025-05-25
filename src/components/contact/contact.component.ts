import { Component } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { ApiService } from '../../app/services/api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule, 
    InputTextModule, 
    IftaLabelModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactPageDetails: any;
  isClicked = false;
  email = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  googleMap: SafeResourceUrl | null = null;
  constructor(
    private apiService: ApiService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.apiService.get('contact').subscribe((data: any) => {
      this.contactPageDetails = data;
      this.googleMap = this.sanitizer.bypassSecurityTrustResourceUrl(
        data.mapIFrame
      );
    });
  }

  onSubmit(){
    this.isClicked = true;
    this.apiService.sendEmail('send-email', this.email).subscribe({
      next: (res: any) => {
        alert('Email Sent Successfully!!!');
        this.isClicked = false;
      },
      error: (err) => {
        alert('Error sending email. Please try again later.');
        this.isClicked = false;
      }
    });
  }
}
