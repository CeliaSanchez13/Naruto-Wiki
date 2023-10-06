import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clans } from 'src/app/interfaces/clans.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html'
})
export class ClanComponent implements OnInit{

  index:number=0;
  clan?:Clans;

  constructor( private _serviciosService:ServicesService,
               private route:ActivatedRoute){

  }


  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.getClan();
  }

  //Metodos

  getClan(){
    this._serviciosService.getClan(this.index).subscribe(
      (resp:any) => {
        this.clan = resp;
      }
    )
  }

}
