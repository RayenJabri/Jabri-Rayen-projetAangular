import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/Genre.model';
import { Programme } from '../model/programme.model';
import { AuthService } from '../services/auth.service';
import { ProgrammeService } from '../services/programme.service';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styleUrls: ['./recherche-par-genre.component.css']
})
export class RechercheParGenreComponent implements OnInit {
  programmes!: Programme[] ;
  genres!: Genre[]  ;
  IdGenre: number = 0;
  constructor(private programmeService: ProgrammeService, 
              public authService: AuthService){}
  ngOnInit():void {
    this.genres = this.programmeService.listeGenre();
    this.programmes = [];
  }
  onchange(){
   this.programmes = this.programmeService.rechercheParGenre(this.IdGenre);
  }
}
