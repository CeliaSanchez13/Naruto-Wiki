import { Component, OnInit } from '@angular/core';
import { Clans } from 'src/app/interfaces/clans.interface';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clans',
  templateUrl: './clans.component.html',
  styleUrls: ['./clans.component.css']
})
export class ClansComponent implements OnInit{

  clans:Clans[] = [];

  constructor( private _serviceServices: ServicesService){

  }

  ngOnInit(): void {
    this.listClans();
  }


  //METODOS
  listClans(){
    this._serviceServices.allClansList().subscribe(
      (resp:any) => {
        this.clans = resp;
        console.log(this.clans);
      }
    )
  }

}
