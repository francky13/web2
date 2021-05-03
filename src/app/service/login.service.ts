import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
   login(body: any){
    return this.http.post('http://localhost:3000/api/auth/login', body, {
      observe: 'body'
    });
  }
}
