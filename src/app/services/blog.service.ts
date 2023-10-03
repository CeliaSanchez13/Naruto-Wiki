import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicesService } from './services.service';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor( private http: HttpClient,
               private _servicesService: ServicesService) { }


  //Crear el usuario
  newUser(user: FormGroup){
    return this.http.post(`${ this._servicesService.firebaseUrl}/usuarios.json`, user).subscribe(
      resp => {
        console.log(resp);
        console.log('Usuario creado!!');
      }
    )
  }

  getUsers(){
    return this.http.get(`${ this._servicesService.firebaseUrl}/usuarios.json`).pipe(
      map( this.crearArrayUsers)
    );
  }

  private crearArrayUsers ( usersObj:any){

    const USERS: User[] = [];

    if( usersObj === null ){ return [];} //Si es nulo/no hay info retornamos un array vacío

    Object.keys(usersObj).forEach( key => {
      const USER: User = usersObj[key]; //Sacamos el objeto de cada ID creado en Firebase.
      usersObj.id = key;

      USERS.push(USER);
    })

    return  USERS;
  }

  //Traer imagenes
  getAvatares(){
    return this.http.get(`${ this._servicesService.firebaseUrl}/avatar.json`);
  }

  //Ver comentarios
  getAllComments(){
    return this.http.get(`${ this._servicesService.firebaseUrl}/mensajes.json`);
  }

}
