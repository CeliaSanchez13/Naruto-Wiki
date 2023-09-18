import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TailedBeast } from 'src/app/interfaces/tailedB.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-by-tailed-b',
  templateUrl: './by-tailed-b.component.html',
  styleUrls: ['./by-tailed-b.component.css']
})
export class ByTailedBComponent implements OnInit{

  index:number=0;
  beasts?:TailedBeast;

  constructor( private _servicioService:ServicesService,
               private route: ActivatedRoute){}


  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.recuperarCharacter();
  }

  //Metodos
  recuperarCharacter(){
    this._servicioService.getTailedB(this.index).subscribe(
      (resp:any) => {
        this.beasts = resp;
        console.log(this.beasts)
      }
    )
  }
}
