import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, Characters} from '../interfaces/characters.interface';
import { Observable, catchError, map, of } from 'rxjs';
import { Clans } from '../interfaces/clans.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  private apiUrl:string =  'https://www.narutodb.xyz/api';
  private firebaseUrl:string =  'https://naruto-wiki-82280-default-rtdb.firebaseio.com';


  constructor( private http: HttpClient) { }


  //CHARACTERS
  /*
  private getCharactersRequest(url:string): Observable<Characters[]>{
    return this.http.get<Characters[]>(url)
            .pipe(
              catchError( () => of([]) )
            );
  }*/

  allCharactersList(pagi:number){
    //return this.http.get(`${this.apiUrl}/character`);
    //Es un total de 72 paginas, capturar el valor del total de personajes y dividirlo de forma dinamica en los botones de la paginacion
    return this.http.get<Characters[]>(`${this.apiUrl}/character?page=${pagi}&limit=20`);
  }

  searchByCharacter( id: number ){
    return this.http.get<Character[]>(`${this.apiUrl}/character/${id}`);
  }

  //CLANS
  allClansList(){
    return this.http.get(`${this.firebaseUrl}/clans.json`);
  }

  newClan(clan:Clans){
    return this.http.post(`${ this.firebaseUrl}/clans.json`, clan).pipe(
      map( (resp:any) => {
        clan.id = resp.name;
        return clan;
      })
    );
  }


}
