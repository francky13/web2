import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/service/info.service';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {
  data: any;
  constructor(private actualiterserv :InfoService) { }

  ngOnInit(): void {
    this.actualiter();
  }
    actualiter(){
      this.actualiterserv.getinfo().subscribe(
      (res) => {
         const temps = res as any;
         this.data = temps['data'];
         console.log(this.data);
      }
    );
}
}
