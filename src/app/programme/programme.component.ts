import { Component, OnInit } from '@angular/core';
import { Programme } from '../model/programme.model';
import { AuthService } from '../services/auth.service';
import { ProgrammeService } from '../services/programme.service'; 
@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {
  programme : Programme[]; 

  constructor(private ProgrammeService: ProgrammeService,
    public authService: AuthService)  {
  this.programme = ProgrammeService.listeProgramme();
  }
  
  ngOnInit(): void {
        
    }
    supprimerProgramme(p: Programme)
{
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.ProgrammeService.supprimerProgramme(p)
}

}
