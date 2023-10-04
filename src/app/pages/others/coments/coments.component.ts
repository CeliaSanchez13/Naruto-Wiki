import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { ValidatorService } from 'src/app/shared/service/validator.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit{

  userLog:string | null;
  imgLog:string | null;

  commentsList:any[] = [];

  page:number = 1;
  pageSize:number = 10;

  commentForm: FormGroup;
  
  constructor( private _blogService:BlogService,
               private fb: FormBuilder,
               private _validatorService:ValidatorService,
               private router:Router){}


  ngOnInit(): void {
    //Obtener el usuario logeado
    this.userLog = localStorage.getItem('user');
    this.imgLog = localStorage.getItem('image');

    //Validaciones formulario
    this.commentForm = this.fb.group({
      comment:['',[Validators.required,Validators.minLength(5)]]
    });

    //Traemos los comentarios
    this._blogService.getAllComments().subscribe(
      (resp:any) => {
        this.commentsList = resp;
        //Ponemos el array al reves para poder asi hacer la paginación en condiciones, mostrará el ultimo comentario el primero
        this.commentsList.reverse();
    });

  }


  //Metodos

  isValidField ( field:string ){
    return this._validatorService.isValidField(this.commentForm, field );
  }

  deleteComment(id:string, i:number){
    Swal.fire({
      icon: 'question',
      title: 'Do you want delete this comment?',
      showDenyButton: true,
      confirmButtonText: 'Confirm',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Entramos");
        //Borramos del actual array cargado
        this.commentsList.splice(i,1);
        this._blogService.deleteComment(id).subscribe();
        Swal.fire({
          icon: 'success',
          title: 'Comment successfully deleted',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

  saveComment(){
    console.log(this.commentForm.value);
    // TODO: Hacer un objeto que será luego el que se guarde:
    // capturar el today y transformarlo
    console.log(this.commentForm)

    let objComment = {
      fecha:'',
      image: this.imgLog,
      text: this.commentForm.controls['comment'].value,
      user: this.userLog
    };

    Swal.fire({
      icon:'question',
      title: 'Do you want send this comment?',
      showDenyButton: true,
      confirmButtonText: 'Confirm',
      denyButtonText: `Don't send`,
    }).then((result) => {
      if (result.isConfirmed) {
        this._blogService.newComment(objComment);
        Swal.fire({
          icon: 'success',
          title: 'Published comment',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          showConfirmButton: false,
          timer: 1500
        })
        setTimeout(function(){
          if( localStorage.getItem('user') !== null){
            window.location.reload();
          }
        }, 1500);
      }
    })

  }//Fin_save

}
