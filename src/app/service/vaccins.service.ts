import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VaccinsService {


  constructor(private http: HttpClient) { }
   getvaccins(){
    return this.http.get(`${url}/api/vaccins/getvaccins`);
  }
   gettotal(){
    return this.http.get(`${url}/api/vaccins/gettotal`);
  }
}
