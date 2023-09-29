import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { BlogService } from 'src/app/services/blog.service';
import { ValidatorService } from 'src/app/shared/service/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuarios:User[] = [];
  formu!:FormGroup;

  constructor( private _blogService:BlogService,
               private _validatorService:ValidatorService,
               private fb:FormBuilder){}

  ngOnInit(): void {
    
    this.formu = this.fb.group({
      email:['',[Validators.required,Validators.pattern(this._validatorService.emailPattern)]],
      password:['',[Validators.required,Validators.pattern(this._validatorService.passPattern)]]
    });

    //Obtenemos los datos los usuarios
    this._blogService.getUsers().subscribe(
      resp => {
        this.usuarios = resp;
      }
    )
  }

  isValidField ( field:string ){
    return this._validatorService.isValidField(this.formu, field );
  }

  loginSubmit(){
    console.log(this.formu.value);
    for( let i=0 ; i <= this.usuarios.length ; i++){
      if( this.usuarios[i]?.email === this.formu.controls['email'].value ){
        console.log('si existe el email')
      }
      
    };
  }
}
