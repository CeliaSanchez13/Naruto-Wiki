import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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

    this.formu = this.fb.group({
      user:['',[Validators.required,Validators.minLength(5)]],
      email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      password:['',[Validators.required,Validators.pattern("[A-Za-z0-9._%+-]{8,15}$")]],
      image:['',[Validators.required]]
      /*
      apellido:['',Validators.required],
      correo:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      direccion: this.fb.group({
        distrito:['',Validators.required],
        ciudad:['',Validators.required]
      }),
      pasatiempos:'hli',
      pasatiempos: this.fb.array([
        ['ss'],[],[],[]
      ])*/
    });

  }

  

  get userNoValido(){
    return this.formu.get('user')?.invalid && this.formu.get('user')?.touched;
  }
  get emailNoValido(){
    return this.formu.get('email')?.invalid && this.formu.get('email')?.touched;
  }
  get passwordNoValido(){
    return this.formu.get('password')?.invalid && this.formu.get('password')?.touched;
  }
  get imageNoValido(){
    return this.formu.get('image')?.invalid && this.formu.get('image')?.touched;
  }


  save(){
     console.log(this.formu);
  }


}
