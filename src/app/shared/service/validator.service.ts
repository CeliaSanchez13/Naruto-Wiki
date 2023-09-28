import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  passPattern: string = "^[A-Za-z0-9._%+-]{8,15}$";

  constructor() { }


  isValidField( myForm:FormGroup, field:string ){ //Metodo para comprobar si tiene errores o no el campo que le pasemos
    return myForm.controls[field].errors && myForm.controls[field].touched;
  }

  isFieldOneEqualFieldTwo( field1:string, field2:string ){
      if ( field1 === field2 ) {
        return false;
      }else{
        return true;
      }
  }
}
