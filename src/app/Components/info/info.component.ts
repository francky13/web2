import { Component, OnInit } from '@angular/core';
import { SuiviService } from 'src/app/service/suivi.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
resultat: any = '' ;
positivites: any = '' ;
positivites2: any = '' ;


  constructor(private infoservice: SuiviService) { }

  ngOnInit(): void {
    this.suiviparpays();
    this.posititivite();
  }
    suiviparpays(){
      this.infoservice.getstatistiquepays().subscribe(
      (res) => {
         const temps = res as any;
         this.resultat = temps['data'];
         console.log(this.resultat);
      }
    );
    }
posititivite(){
      this.infoservice.getpotiviter().subscribe(
      (res) => {
         const temps = res as any;
         this.positivites = temps['data'];
         console.log(this.positivites);
         this.positivites2 = 100 - this.positivites[0].pourcentage;
         console.log(this.positivites2);
      }
    );
}
}
