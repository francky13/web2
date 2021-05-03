import { Component, OnInit } from '@angular/core';
import { SuiviService } from 'src/app/service/suivi.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
result: any = '' ;
  constructor(private infoservice: SuiviService) { }

  ngOnInit(): void {
  }
    suiviparpays(){
      this.infoservice.getstatistiquepays().subscribe(
      (res) => {
         const temps = res as any;
         this.result = temps['data'];
         console.log(this.result);
      }
    );

}
