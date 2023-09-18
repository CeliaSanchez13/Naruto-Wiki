import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AkatsukiElement } from 'src/app/interfaces/akatsuki.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-by-akatsuki',
  templateUrl: './by-akatsuki.component.html',
  styleUrls: ['./by-akatsuki.component.css']
})
export class ByAkatsukiComponent implements OnInit{

  index:any;
  member?:AkatsukiElement;
  img:string=''
  img2:string=''

  constructor( private _servicesService:ServicesService,
               private route:ActivatedRoute,
               private router:Router){

  }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    console.log(this.index);
    //this.router.navigate['/character',this.index];
    this.getAkatsukiCharacter();
  }

  //Metodos

  getAkatsukiCharacter(){
    this._servicesService.getAkatsuki(this.index).subscribe(
      (resp:any) => {
        this.member = resp;
        this.img = resp.images[0];
        this.img2 = resp.images[1];
        console.log(this.member);
      }
    )
  }

}
