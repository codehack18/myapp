
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.example.com'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Example method to get data from API
  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/endpoint`);
  }

  getItems(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items`);
  }

  updateItem(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/items/${id}`, data);
  }
}



  