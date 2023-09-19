import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, Characters} from '../interfaces/characters.interface';
import { Observable, catchError, map, of } from 'rxjs';
import { Clans } from '../interfaces/clans.interface';
import { TailedB, TailedBeast } from '../interfaces/tailedB.interface';
import { Akatsuki, AkatsukiElement } from '../interfaces/akatsuki.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  private apiUrl:string =  'https://www.narutodb.xyz/api';
  private firebaseUrl:string =  'https://naruto-wiki-82280-default-rtdb.firebaseio.com';

  //Parte GIFS
  private apiKey:       string = '0MwpZhCay87P3AETHZhFWMCLPH5OzpJy';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';
  // -----------------

  okButton = false;


  constructor( private http: HttpClient) { }


  //CHARACTERS
  allCharactersList(pagi:number){
    //return this.http.get(`${this.apiUrl}/character`);
    //Es un total de 72 paginas, capturar el valor del total de personajes y dividirlo de forma dinamica en los botones de la paginacion
    return this.http.get<Characters[]>(`${this.apiUrl}/character?page=${pagi}&limit=20`)
              .pipe(
                catchError( () => of([]) )
              );
  }

  searchByCharacter( id: number ){
    return this.http.get<Character[]>(`${this.apiUrl}/character/${id}`)
              .pipe(
                catchError( () => of([]) )
              );
  }

  //CLANS
  allClansList(){
    return this.http.get(`${this.firebaseUrl}/clans.json`)
              .pipe(
                catchError( () => of([]) )
              );
  }

  getClan( id: number ){
    return this.http.get<Clans[]>(`${this.firebaseUrl}/clans/${id}.json`)
              .pipe(
                catchError( () => of([]) )
              );
  }

  //TAILED BEASTS
  allTailedBList(){
    return this.http.get<TailedB[]>(`${this.apiUrl}/tailed-beast`)
              .pipe(
                catchError( () => of([]) )
              );
  }

  getTailedB( id: number ){
    return this.http.get<TailedBeast[]>(`${this.apiUrl}/tailed-beast/${id}`)
                .pipe(
                  catchError( () => of([]) )
                );
  }

  //AKATSUKI
  allAkatsuki( pagi:number){
    return this.http.get<Akatsuki[]>(`${this.apiUrl}/akatsuki?page=${pagi}&limit=20`)
              .pipe(
                catchError( () => of([]) )
              );
  }
  

  /*
  newClan(clan:Clans){
    return this.http.post(`${ this.firebaseUrl}/clans.json`, clan).pipe(
      map( (resp:any) => {
        clan.id = resp.name;
        return clan;
      })
    );
  }*/


}
