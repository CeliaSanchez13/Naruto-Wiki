import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit{

  initialValue: string = '';

  constructor( private _serviceService:ServicesService){}

  ngOnInit(): void {
    this._serviceService.setFalseButtonAkaChar();
    console.log(this._serviceService.okButton+" inicializamos a false cuando abrimos el listado de los personajes");
  }

}
