import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/characters.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-by-character',
  templateUrl: './by-character.component.html',
  styleUrls: ['./by-character.component.css']
})
export class ByCharacterComponent implements OnInit{

  index:number=0;
  character?:Character;

  constructor( private _servicioService:ServicesService,
               private route: ActivatedRoute){}


  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.recuperarCharacter();
  }

  //Metodos
  recuperarCharacter(){
    this._servicioService.searchByCharacter(this.index).subscribe(
      (resp:any) => {
        this.character = resp;
        console.log(this.character);
      }
    )
  }
}
