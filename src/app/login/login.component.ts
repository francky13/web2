import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
Login = {
    nom: '',
    mdp: '',
  };
  results: null;
  constructor(private Loginservice: LoginService, private router: Router) { }

  ngOnInit(): void {

  }
  seConnecter() {
    this.Login.nom = (document.getElementById('Mail') as HTMLInputElement).value;
    this.Login.mdp = (document.getElementById('pass') as HTMLInputElement).value;
    console.log(this.Login);
    this.Loginservice.login(this.Login).subscribe(
      (res : any) =>{
      console.log(res);
      window.location.reload();
    },
    (err: { error: { [x: string]: { message: any; }; }; })=>{
      let err_message = err.error;
      if(err.error['META'] != undefined) err_message = err.error['META'].message;
      alert("erreur");
      }
    );
  }

  }


