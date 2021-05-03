import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigateurComponent } from './Components/navigateur/navigateur.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InfoComponent } from './Components/info/info.component';
import { ActualiteComponent } from './Components/actualite/actualite.component';
import { ActuComponent } from './actu/actu.component';
import { InsertioninfoComponent } from './Components/insertioninfo/insertioninfo.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { VaccinationinfoComponent } from './Components/vaccinationinfo/vaccinationinfo.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavigateurComponent,
    InfoComponent,
    ActualiteComponent,
    ActuComponent,
    InsertioninfoComponent,
    VaccinationComponent,
    LoginComponent,
    VaccinationinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
