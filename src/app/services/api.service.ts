import { Injectable } from '@angular/core';
import * as Config from '../../../assets/config.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  private baseUrl = `${(Config as any).apiUrl}`;

  get<T>(endpoint: string): Observable<T> {
    if(endpoint!=null){
      return this.http.get<T>(`${this.baseUrl}getAppData?pageName=${endpoint}`);
    }
    else{
      return this.http.get<T>(`${this.baseUrl}`);
    }
  }

  sendEmail<T>(endpoint: string, body: any):Observable<Object>{
    return this.http.post(`${this.baseUrl}${endpoint}`, body);
  }
 
}
