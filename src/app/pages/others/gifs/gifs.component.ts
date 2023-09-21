import { Component, Input } from '@angular/core';
import { Gif } from 'src/app/interfaces/gifs.interface';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent {

  gifs: Gif[] = [];
  tags= ['Naruto','Hinata','Sasuke','Kurama','Gaara','Jiraiya','Kakashi'];

  constructor( private _gifsService:GifsService){

    this.searchTag('Naruto');

  }
  
 

  searchTag( tag:string ) {

    this._gifsService.searchTag(tag)?.subscribe(
      resp => {
        this.gifs = resp.data;
      }
    )

  }
  
}
