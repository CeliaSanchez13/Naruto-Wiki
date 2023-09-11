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
  acceso:boolean = false;

  pagTotal:number = 1 ;
  paginasTotales:number = 0;

  page:number = 1;
  pageSize:number = 20;
  totalCharacters:number = 0;

  array:Character[] = [];

  pagination:Character[] = [];

  constructor(private _serviceService: ServicesService){
  this.verArray();
  }

  ngOnInit(): void {
    
    this.getCharactersListInfo(); 
    this.getCharactersListForPagination(); 
    this.verArray();
  }

  pagina(page:any){
    console.log(page);
  }

  getCharactersListForPagination(){

    if ( !this.carga ){
      this._serviceService.allCharactersList(this.pagTotal).subscribe(
        (resp:any) => {
          this.array = resp.characters;
          this.carga = true;
          this.pagTotal++
          this.getCharactersListForPagination();
        }
      );
    }
    if ( this.carga ){
      for ( let i = 2 ;i<this.paginasTotales;i++ ){
        for( let j = 0; j < this.pageSize; j++){
          this._serviceService.allCharactersList(i).subscribe(
            (resp:any) => {
              console.log(resp.characters[j]);
              this.array.push(resp.characters[j]);
              //console.log('Longitud del array'+ this.array.length+ ' en la pagina '+ i + ' objeto'+ j +'con el ID '+resp.characters[j].id + ' y el nombre '+ resp.characters[j].name);
            }
          )
        }
      }
    }

  }

  getCharactersListInfo(){

    this._serviceService.allCharactersList(1).subscribe(
      (resp:any) => {
        this.page = resp.currentPage;
        this.pageSize = resp.pageSize;
        this.totalCharacters = resp.totalCharacters;
      
        this.paginasTotales = Math.round(this.totalCharacters / this.pageSize );
        console.log("La longitud es "+ this.paginasTotales);
      }
    );
  }

  verArray(){
    
      console.log(this.array);
    
  }

}


