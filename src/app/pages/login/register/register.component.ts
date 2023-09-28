import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ValidatorService } from 'src/app/shared/service/validator.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',

  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent {

  formu!:FormGroup;
  model: NgbDateStruct;

  constructor( private fb: FormBuilder,
               private _validatorService:ValidatorService ){

    this.formu = this.fb.group({
      user:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.pattern(this._validatorService.emailPattern)]],
      date: [''],
      password:['',[Validators.required,Validators.pattern(this._validatorService.passPattern)]],
      password2:['',Validators.required],
      //image:['',[Validators.required]]
    });

  }

  

  isValidField ( field:string ){
    return this._validatorService.isValidField(this.formu, field );
  }

  isEqualPass(field1:string, field2:string){
    return this._validatorService.isFieldOneEqualFieldTwo(field1,field2);
  }


  save(){
    if ( this.formu.invalid ){
      console.log("invalid");
      console.log(this.formu.value);
      this.formu.markAllAsTouched();
      return ;
    }

    //Si hay fecha... transformamos el formato...
    if ( this.formu.controls['date'].value !==''){
      const DATE = new Date(this.formu.controls['date'].value);
      let dated = DATE.toLocaleString().split(",",1);
      this.formu.controls['date'].setValue(dated[0]);
    }
    
    console.log(this.formu.value);
    
    this.formu.reset();
  }


  clear(){
    this.formu.reset();
  }


}
