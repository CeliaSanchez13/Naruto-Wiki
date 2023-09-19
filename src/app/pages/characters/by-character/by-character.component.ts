import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/characters.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-by-character',
  templateUrl: './by-character.component.html',
  styleUrls: ['./by-character.component.css']
})
export class ByCharacterComponent implements OnInit,OnDestroy{

  index:number=0;
  character?:Character;
  img:string = '';
  img1:string = '';
  buttonAkaChar?:boolean;

  constructor( private _servicioService:ServicesService,
               private route: ActivatedRoute){}


  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.recuperarCharacter();

    this.buttonAkaChar = this._servicioService.okButton;
   
  }

  ngOnDestroy(): void {
    this._servicioService.okButton=false;
  }

  //Metodos
  recuperarCharacter(){
    this._servicioService.searchByCharacter(this.index).subscribe(
      (resp:any) => {
        this.character = resp;
        this.img = resp.images[0]
        this.img1 = resp.images[1]
        console.log(this.character)
      }
    )
  }

}
