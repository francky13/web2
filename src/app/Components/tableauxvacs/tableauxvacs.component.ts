import { Component, OnInit } from '@angular/core';
import { VaccinsService } from 'src/app/service/vaccins.service';

@Component({
  selector: 'app-tableauxvacs',
  templateUrl: './tableauxvacs.component.html',
  styleUrls: ['./tableauxvacs.component.scss']
})
export class TableauxvacsComponent implements OnInit {
 constructor(private vacsservice: VaccinsService) { }
data: any ;
  ngOnInit(): void {
    this.getvaccin();
  }
 getvaccin(){
      this.vacsservice.getvaccins().subscribe(
      (res) => {
         const temps = res as any;
         this.data = temps['data'];
         console.log(this.data);
      }
    );
}}

