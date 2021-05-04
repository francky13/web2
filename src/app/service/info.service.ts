import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InfoService {


  constructor(private http: HttpClient) { }
   getinfo(){
    return this.http.get(`${url}/api/info/listeinfo`);
  }
}
