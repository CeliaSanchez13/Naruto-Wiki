import { Component, OnInit } from '@angular/core';
import { TailedBeast } from 'src/app/interfaces/tailedB.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-tailed-b',
  templateUrl: './tailed-b.component.html'
})
export class TailedBComponent implements OnInit{

  tailedB:TailedBeast[] = [];

  constructor( private _serviceService: ServicesService){}


  ngOnInit(): void {
    this.listBeasts();
  }

  //Metodos

  listBeasts(){
    this._serviceService.allTailedBList().subscribe(
      (resp:any) => {
        this.tailedB = resp.tailedBeasts;
        console.log(this.tailedB);
      }
    )
  }


}
