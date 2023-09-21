import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbAlertModule, NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formu!:FormGroup;
  model: NgbDateStruct;

  constructor( private fb: FormBuilder ){
    this.formu = fb.group({
      name: ["", Validators.required]
  });
  }

  save(){

  }


}
