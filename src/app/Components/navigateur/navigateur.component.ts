import { Component, OnInit } from '@angular/core';
import { SuiviService } from 'src/app/service/suivi.service';

@Component({
  selector: 'app-navigateur',
  templateUrl: './navigateur.component.html',
  styleUrls: ['./navigateur.component.scss']
})
export class NavigateurComponent implements OnInit {

  constructor(private infoservice: SuiviService) { }
  result: any = '' ;


  ngOnInit(): void {
    this.list();
  }
    list(){
      this.infoservice.getstatistique().subscribe(
      (res) => {
         const temps = res as any;
         this.result = temps['data'];
         console.log(this.result);
      }
    );
  }
}
