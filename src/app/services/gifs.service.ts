import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey:       string = '0MwpZhCay87P3AETHZhFWMCLPH5OzpJy';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';

  public gifList: Gif[] = [];

  constructor( private http: HttpClient ) { }

  //Metodos

  searchTag( tag: string ) {
    if ( tag.length === 0 ) return;
    //this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey )
      .set('limit', '20' )
      .set('q', tag )

    return this.http.get<SearchResponse>(`${ this.serviceUrl }/search`, { params });
  
  }

}
