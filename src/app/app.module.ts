import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgrammeComponent } from './programme/programme.component';
import { AddProgrammeComponent } from './add-programme/add-programme.component';
import { FormsModule } from '@angular/forms';
import { UpdateProgrammeComponent } from './update-programme/update-programme.component';
import { ListeGenreComponent } from './liste-genre/liste-genre.component';

import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
@NgModule({
  declarations: [
    AppComponent,
    ProgrammeComponent,
    AddProgrammeComponent,
    UpdateProgrammeComponent,
    ListeGenreComponent,
   
    LoginComponent,
    ForbiddenComponent,
    RechercheParGenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
