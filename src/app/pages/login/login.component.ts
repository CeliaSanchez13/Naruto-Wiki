import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { BlogService } from 'src/app/services/blog.service';
import { ValidatorService } from 'src/app/shared/service/validator.service';
import Swal from 'sweetalert2';

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
               private fb:FormBuilder,
               private route:Router){}

  ngOnInit(): void {

    if( localStorage.getItem('user') !== null){
      this.route.navigate(['/home']); //Si ya nos hemos logueado... nos lleva a la pagina principal con el user en el menu ya cargado
    }
    
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
        //El email existe
        if ( this.usuarios[i]?.password === this.formu.controls['password'].value){
          console.log("USUARIO correcto!")
          Swal.fire({
            icon: 'success',
            title: `Welcome ${ this.usuarios[i]?.user }`,
            text: 'User found!',
            showConfirmButton: false,
            timer: 3000
          });

          localStorage.setItem('email', `${ this.usuarios[i]?.email }`);
          localStorage.setItem('user', `${ this.usuarios[i]?.user }`);
          localStorage.setItem('date', `${ this.usuarios[i]?.date }`);
          localStorage.setItem('image', `${ this.usuarios[i]?.image }`);

          setTimeout(function(){
            if( localStorage.getItem('user') !== null){
              window.location.reload();
            }
          }, 3000);
        }//Fin_if
      }   
    };//Fin_for
  }//Fin_submit

}
