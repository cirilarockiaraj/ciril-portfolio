import { Injectable } from '@angular/core';
import * as appData from '../../../assets/appData.json';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  get<T>(endpoint: string): Observable<T> {
    switch (endpoint) {
      case 'home':
        return of((appData as any).home);
      case 'about':
        return of((appData as any).about);
      case 'contact':
        return of((appData as any).contact);
      case 'skills':
        return of((appData as any).skills);
      case 'projects':
        return of((appData as any).projects);
      case 'experience':
        return of((appData as any).experience);
      case 'resume':
        return of((appData as any).resume);
      default:
        return of((appData as any).home); // Default case to return home data
        break;
    }
  }
  
  sendEmail<T>(body: any):Promise<EmailJSResponseStatus>{
    return emailjs.send('service_8ikmrkh', 'template_k7vytsp', body, 'BMherVZI0_MnG8R76');
  }
 
}
