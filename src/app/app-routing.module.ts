import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActuComponent } from './actu/actu.component';
import { VaccinationComponent } from './vaccination/vaccination.component';

import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path: 'Suivi-des-tests', component : WelcomeComponent},
  {path: 'Actualite', component : ActuComponent},
  {path: 'Suivi-de-vaccination', component : VaccinationComponent},


{
    path: '',
    redirectTo: 'Suivi-des-tests',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
