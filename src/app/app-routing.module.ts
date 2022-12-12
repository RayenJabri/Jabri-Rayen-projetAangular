import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgrammeComponent } from './programme/programme.component';
import { AddProgrammeComponent } from './add-programme/add-programme.component';
import { UpdateProgrammeComponent } from './update-programme/update-programme.component';

import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProgrammeGuard } from './programme.guard';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
const routes: Routes = [
  {path: "programme", component : ProgrammeComponent},
  {path: "add-programme", component : AddProgrammeComponent, canActivate:[ProgrammeGuard]},

  { path: "", redirectTo: "programme", pathMatch: "full" },
  {path: "updateProgramme/:id", component: UpdateProgrammeComponent},
  {path: "rechercheParGenre", component : RechercheParGenreComponent},

  {path: 'app-forbidden', component: ForbiddenComponent},
  
  {path: 'login', component: LoginComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
