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

  carga:boolean = false;
  paginasTotales:number = 0;
  page:number = 1;
  pageSize:number = 20;
  totalCharacters:number = 0;

  array:Character[] = [];
  arrayTemp:Character[] = [];

  constructor(private _serviceService: ServicesService){

  }

  ngOnInit(): void {
    
    this.getCharactersListForPagination(); 
   
  }

  //METODOS

  getCharactersListForPagination(){

    if ( !this.carga ){
      this._serviceService.allCharactersList(1).subscribe(
        (resp:any) => {
          this.page = resp.currentPage;
          this.pageSize = resp.pageSize;
          this.totalCharacters = resp.totalCharacters;
      
          this.paginasTotales = Math.round(this.totalCharacters / this.pageSize );
          console.log("La longitud es "+ this.paginasTotales);
      
          this.array = resp.characters;
          this.carga = true;
          this.getCharactersListForPagination();
        }
      );
    }//EndIF

    if ( this.carga ){
      for ( let i = 2 ;i<this.paginasTotales;i++ ){
        for( let j = 0; j < this.pageSize; j++){
          this._serviceService.allCharactersList(i).subscribe(
            (resp:any) => {
              this.array.push(resp.characters[j]);
            }
          )
        }
      }
    }//EndIF

  }//End getCharactersListForPagination()


  onKeyPress(value:string){
    this.arrayTemp = [];
    for ( let i = 0 ;i <= this.array.length;i++ ){
      if ( this.array[i].name.toLowerCase().includes(value.toLocaleLowerCase()) ) this.arrayTemp.push(this.array[i]);
    }
  }

}


