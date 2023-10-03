import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/service/validator.service';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',

  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit{

  formu!:FormGroup;
  usuarios:User[] = [];

  avatarList:any[] = [];
  imagenSeleccionada:any = null;

  constructor( private fb: FormBuilder,
               private _validatorService:ValidatorService,
               private _blogService:BlogService,
               private route:Router ){ }

  ngOnInit(): void {
    this.formu = this.fb.group({
      user:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.pattern(this._validatorService.emailPattern)]],
      date: [''],
      password:['',[Validators.required,Validators.pattern(this._validatorService.passPattern)]],
      password2:['',Validators.required],
      image:['']
    });

    //Obtenemos los datos de los usuarios
    this._blogService.getUsers().subscribe(
      resp => this.usuarios = resp
    );

    //Obtenemos las imagenes de los avatar
    this._blogService.getAvatares().subscribe(
      (resp:any) => {
        this.avatarList = resp;
        console.log(this.avatarList)
      }
    );
    

  }//FIN_INIT

  useImage( selector:string, img :string , avatarSeleccionado: any ){
    let elemento = document.querySelector<HTMLElement>(selector);
    if ( elemento !== null) elemento.style.visibility = 'hidden';

    this.imagenSeleccionada = avatarSeleccionado;

    //Asignamos el valor a la imagen dentro del objeto
    this.formu.controls['image'].setValue(img);
  }
  
  isValidField ( field:string ){
    return this._validatorService.isValidField(this.formu, field );
  }

 

  save(){
    let userExist, emailExist,passNotMatch, imgNoChoose = false
    let htmlContent:string = '';
    //Recorremos los usuarios para comprobar que no existe ya ninguno
    for( let i=0 ; i <= this.usuarios.length ; i++){
        if( this.usuarios[i]?.user === this.formu.controls['user'].value ){
          userExist = true;
          htmlContent += "<p>The username already exists.</p>"
        }
        if( this.usuarios[i]?.email === this.formu.controls['email'].value ){
          emailExist = true;
          htmlContent += "<p>The email account already exists.</p>"
        }
    };

    //Comprobacion de las pass
    if( this.formu.controls['password'].value !== this.formu.controls['password2'].value ){
      passNotMatch = true;
      htmlContent += "<p>Password don´t match.</p>"
    }
    //Comprobación imagen seleccionada
    if( this.formu.controls['image'].value === ''){
      imgNoChoose = true;
      htmlContent += "<p>No avatar selected.</p>"
    }
    
    if ( emailExist || userExist || passNotMatch || imgNoChoose ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...Invalid data',
        html: `${htmlContent}`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }else{

      if ( this.formu.invalid ){
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

      Swal.fire({
        title: 'Are you sure?',
        text: "The provided data will be used, you will not be able to revert it.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continue'
      }).then((result) => {
        if (result.isConfirmed) {
          this._blogService.newUser(this.formu.value);
          this.formu.reset();

          Swal.fire({
            title:'Thank you!',
            text:'Your account has been created, you can now log in on our web.',
            icon: 'success',
            showClass:{
              popup: 'animate__animated animate__jackInTheBox'
            },
            showConfirmButton: false,
            timer:3000
        });
        this.route.navigate(['/login']);
        }
      })
    }
    
  }//Fin_save


  clear(){
    this.formu.reset();
  }


}
