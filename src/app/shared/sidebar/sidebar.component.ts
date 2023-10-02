import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  userLog:string | null;

  constructor(){}

  ngOnInit(): void {
    
    this.userLog = localStorage.getItem('user');
    console.log('Usuario logeado -> '+this.userLog);

   
  }

  logout(){
    Swal.fire({
      title: 'We hope to see you soon',
      text: 'Bye!',
      timer:3000,
      showConfirmButton: false,
      showClass: {
        popup: 'animate__animated animate__fadeIn'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut'
      }
    })

    localStorage.clear(); //Borramos el contenido del localStorage
    
    setTimeout(function(){
      window.location.reload();
    }, 3000);
  } //Fin_logout



}
