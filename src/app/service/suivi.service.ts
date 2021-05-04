import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {url} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SuiviService {

  constructor(private http: HttpClient) { }
  getstatistique(){

    return this.http.get(`${url}/api/suivi/statistique`);
  }
  // tslint:disable-next-line:typedef
  getstatistiquepays(){
    return this.http.get(`${url}/api/suivi/statistiquepays`);
  }
  getstatistiquejournalier(){
    return this.http.get(`${url}/api/suivi/statistiqueJour`);
  }
    getpotiviter(){
    return this.http.get(`${url}/api/suivi/tauxpositiviter`);
  }
}
