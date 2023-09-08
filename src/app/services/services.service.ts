import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characters} from '../interfaces/characters.interface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  private apiUrl:string =  'https://www.narutodb.xyz/api';


  constructor( private http: HttpClient) { }


  private getCharactersRequest(url:string): Observable<Characters[]>{
    return this.http.get<Characters[]>(url)
            .pipe(
              catchError( () => of([]) )
            );
  }
/*
  allCharactersList(){
    this.http.get(`${this.apiUrl}/character`).pipe(
      map( this.arrayCharacters)
    )
  }

  private arrayCharacters(charactersObj:any){
    //Obtener la lista de personajes y rellenarlo en el array
    const charactersList: Characters[] = [];

    Object.keys(charactersObj).forEach( key => {
      const character: Characters = charactersObj[key];

      charactersList.push(character)
    });

    return charactersList;
  }*/

  allCharactersList(){
    //return this.http.get(`${this.apiUrl}/character`);
    //Es un total de 72 paginas, capturar el valor del total de personajes y dividirlo de forma dinamica en los botones de la paginacion
    return this.http.get<Characters[]>(`${this.apiUrl}/character?page=71&limit=20`);

  }

  searchByCharacter( term: string ): Observable<Characters[]>{
    return this.getCharactersRequest(`${this.apiUrl}/character/${term}`)
  }


}