import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/Genre.model';
import { Programme } from '../model/programme.model';
import { ProgrammeService } from '../services/programme.service';
import { Router } from '@angular/router';
@Component({

  selector: 'app-add-programme',
  templateUrl: './add-programme.component.html',
  styleUrls: ['./add-programme.component.css']
})
export class AddProgrammeComponent implements OnInit {

  newProgramme = new Programme();
  genre! : Genre[];
newIdGenre! : number;
newGenre! : Genre;
  constructor(private programmeService: ProgrammeService,
    private router :Router)   {}
  ngOnInit(): void {
    this.genre = this.programmeService.listeGenre();
  }
  addProgramme(){
    this.newGenre =
    this.programmeService.consulterGenre(this.newIdGenre);
    this.newProgramme.genre = this.newGenre;
    this.programmeService.addProgramme(this.newProgramme);
    this.router.navigate(['programme']);
    }
}
