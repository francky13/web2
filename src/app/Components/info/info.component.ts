import { Component, OnInit } from '@angular/core';
import { SuiviService } from 'src/app/service/suivi.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
resultat: any = '' ;
  constructor(private infoservice: SuiviService) { }

  ngOnInit(): void {
    this.suiviparpays();
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
}
