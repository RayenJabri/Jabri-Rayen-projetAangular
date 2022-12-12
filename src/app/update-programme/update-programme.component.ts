import { Component , OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProgrammeService } from '../services/programme.service';
import { Programme } from '../model/programme.model';
import { Genre } from '../model/Genre.model';
@Component({
  selector: 'app-update-programme',
  templateUrl: './update-programme.component.html',
  styleUrls: ['./update-programme.component.css']
})
export class UpdateProgrammeComponent implements OnInit {
  currentProgramme=new Programme();
  genre! : Genre[];
  newId! : number;
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
  private programmeService: ProgrammeService) { }
  
  ngOnInit() {
    this.genre= this.programmeService.listeGenre();
    this.currentProgramme =this.programmeService.consulterProgramme(this.activatedRoute.snapshot.params['id']);
    this.newId = this.currentProgramme.genre.idGenre;
  }
  updateProgramme()
  {
    this.currentProgramme.genre=this.programmeService.consulterGenre(this.newId); 
  this.programmeService.updateProgramme(this.currentProgramme);
  this.router.navigate(['programme']);
  }
 }

