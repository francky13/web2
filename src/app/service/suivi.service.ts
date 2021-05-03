import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuiviService {

  constructor(private http: HttpClient) { }
  getstatistique(){

    return this.http.get('https://wsfullstack.herokuapp.com/api/suivi/statistique');
  }
  // tslint:disable-next-line:typedef
  getstatistiquepays(){
    return this.http.get('https://wsfullstack.herokuapp.com/api/suivi/statistiquepays');
  }
  getstatistiquejournalier(){
    return this.http.get('https://wsfullstack.herokuapp.com/api/suivi/statistiqueJour');
  }
    getpotiviter(){
    return this.http.get('https://wsfullstack.herokuapp.com/api/suivi/tauxpositiviter');
  }
}
