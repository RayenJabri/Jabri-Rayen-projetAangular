import { Injectable } from '@angular/core';
import { Programme } from '../model/programme.model';
import { Genre} from '../model/Genre.model';
@Injectable({
providedIn: 'root'
})
export class ProgrammeService {
  programme : Programme[]; 
programm! : Programme;
 genre :Genre[];
  programmeRecherche!: Programme[];
constructor() {
  this.genre=[
    {idGenre:1,  nomGenre: 'application'},
    {idGenre:2,  nomGenre: 'jeux'},
    {idGenre:3,  nomGenre: 'navigateur'}
  ]
this.programme = [
  {idProgramme: 1, nomProgramme : "google", nomDev : "google Dev", dateCreation : new Date("01/14/2011"),genre: {idGenre:3,  nomGenre: 'navigateur'}},
  {idProgramme : 2, nomProgramme: "free fire", nomDev : "garena", dateCreation : new Date("12/17/2010"),genre:{idGenre:2,  nomGenre: 'jeux'}},
  {idProgramme : 3, nomProgramme :"facebook", nomDev : "meta", dateCreation : new Date("02/20/2020"),genre: {idGenre:3,  nomGenre: 'navigateur'}}
];
  }
  listeGenre():Genre[] {
    return this.genre;
    }
    consulterGenre(id:number): Genre{
      return this.genre.find(cat => cat.idGenre == id)!;
      }
listeProgramme():Programme[] {
  return this.programme;
}
addProgramme(programme:Programme)
{
  this.programme.push(programme);
}
supprimerProgramme( prod: Programme){

  const index = this.programme.indexOf(prod, 0);
  if (index > -1) {
  this.programme.splice(index, 1);
  }
}
consulterProgramme(id:number): Programme{
  this.programm = this.programme.find(p => p.idProgramme == id)!;
  return this.programm;
  }
  
  updateProgramme(p:Programme)
  {
  
  this.supprimerProgramme(p);
  this.addProgramme(p);
  this.trierProgramme()
  }
  trierProgramme(){
    this.programme = this.programme.sort((n1,n2) => {
    if (n1.idProgramme !> n2.idProgramme !) {
    return 1;
    }
    if (n1.idProgramme! < n2.idProgramme!) {
    return -1;
    }
    return 0;
    });
     
}
rechercheParGenre( id:number): Programme[]{
  
  this.programmeRecherche = [];

  this.programme.forEach((cur, index) => {
   if(id == cur.genre.idGenre) {
       console.log("cur "+cur);
      this.programmeRecherche.push(cur);
       }
 });
 return this.programmeRecherche;
 }
}