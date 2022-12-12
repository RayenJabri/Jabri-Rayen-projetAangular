import { Genre } from "./Genre.model";

export class Programme {
    idProgramme? : number;
    nomProgramme? : string;
    nomDev? : string;
    dateCreation? : Date ;
    genre! :Genre;
  
    }