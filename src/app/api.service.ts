import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl='http://localhost:8080';


  constructor(private http:HttpClient) {}
  postData(data:any):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/api/v1/auth/register`,data);
  }
}
