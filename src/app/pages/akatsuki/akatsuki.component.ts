import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Akatsuki, AkatsukiElement } from 'src/app/interfaces/akatsuki.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-akatsuki',
  templateUrl: './akatsuki.component.html'
})
export class AkatsukiComponent implements OnInit{


  akatsuki:AkatsukiElement[] = [];
  carga:boolean = false;
  paginasTotales:number = 0;
  page:number = 1;
  pageSize:number = 20;
  totalCharacters:number = 0;


  constructor( private _serviceServices: ServicesService,
               private router:Router){}

  ngOnInit(): void {
    this.getCharactersListForPagination();
  }

  //Metodos
  
  getCharactersListForPagination(){

    if ( !this.carga ){
      this._serviceServices.allAkatsuki(1).subscribe(
        (resp:any) => {
          this.page = resp.currentPage;
          this.pageSize = resp.pageSize;
          this.totalCharacters = resp.totalMembers;
      
          this.paginasTotales = Math.round(this.totalCharacters / this.pageSize );
          this.paginasTotales = this.paginasTotales+1;
          
          this.akatsuki = resp.akatsuki;
          
          this.carga = true;
          this.getCharactersListForPagination();
        }
      );
    }//EndIF

    if ( this.carga ){
      for ( let i = 2 ; i <= this.paginasTotales;i++ ){
        console.log(this.paginasTotales);
        console.log(this.page);
        for( let j = 0; j < this.pageSize; j++){
          this._serviceServices.allAkatsuki(i).subscribe(
            (resp:any) => {
              if ( resp.akatsuki[j] != undefined){
                this.akatsuki.push(resp.akatsuki[j]);
              } 
            }
          )
        }
      }
    }//EndIF
    
  }//End get

  viewDataMember( idMember: any ){
    console.log("Este es el id " + idMember);
    let ruta = '/character/'+idMember;
    this.router.navigate['/character/199'];

  }
}
