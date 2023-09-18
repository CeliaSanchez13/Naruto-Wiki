import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AkatsukiElement } from 'src/app/interfaces/akatsuki.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-by-akatsuki',
  templateUrl: './by-akatsuki.component.html',
  styleUrls: ['./by-akatsuki.component.css']
})
export class ByAkatsukiComponent implements OnInit{

  index:number=0;
  member?:AkatsukiElement;

  constructor( private _servicesService:ServicesService,
               private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.getAkatsukiCharacter();
  }

  //Metodos

  getAkatsukiCharacter(){
    this._servicesService.getAkatsuki(this.index).subscribe(
      (resp:any) => {
        this.member = resp;
        console.log(this.member);
      }
    )
  }

}
