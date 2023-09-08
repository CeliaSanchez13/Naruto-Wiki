import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Character, Characters } from 'src/app/interfaces/characters.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'shared-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit{

  array:Character[] = [];

  constructor(private _serviceService: ServicesService){
  
  }

  ngOnInit(): void {
    
    this.getCharactersList(); 
    
  }

  getCharactersList(){

    this._serviceService.allCharactersList().subscribe(
      (resp:any) => {
        this.array = resp.characters;
        console.log(this.array);
      }
    );
  }

}
