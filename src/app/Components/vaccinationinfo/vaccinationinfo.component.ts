import { Component, OnInit } from '@angular/core';
import { VaccinsService } from 'src/app/service/vaccins.service';

@Component({
  selector: 'app-vaccinationinfo',
  templateUrl: './vaccinationinfo.component.html',
  styleUrls: ['./vaccinationinfo.component.scss']
})
export class VaccinationinfoComponent implements OnInit {

  constructor(private vacsservice: VaccinsService) { }
data: any ;
  ngOnInit(): void {
    this.getvaccstotal();
  }
 getvaccstotal(){
      this.vacsservice.gettotal().subscribe(
      (res) => {
         const temps = res as any;
         this.data = temps['data'];
         console.log(this.data);
      }
    );
}}
