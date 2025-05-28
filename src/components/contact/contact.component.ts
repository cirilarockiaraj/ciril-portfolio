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
    let mailContentToAdmin = {
      title: 'Contact Form from ' + this.email.name,
      name: this.email.name,
      time: new Date().toLocaleString(),
      message: `Name: ${this.email.name},\nMail ID: ${this.email.email},\n\n${this.email.message}`,
      email: this.email.email,
    }
    this.isClicked = true;
    this.apiService.sendEmail(mailContentToAdmin).then(()=>{
      alert('Thankyou for contact me. I will get back to you soon.');
      this.isClicked = false;
    }).catch(()=>{
      alert('Failed to send email to admin.');
      this.isClicked = false;
    })
  }
}
