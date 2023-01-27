import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validatorService/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  miForm: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required , Validators.pattern(this.vs.nombreApellidoPattern)]],
      email: ['', [Validators.required , Validators.pattern(this.vs.emailPattern)]],
      username: ['', [Validators.required , this.vs.noPuedeSerStrider]],
      password: ['' , [Validators.required]],
      passwordConfirm: ['' , [Validators.required]]
    },
    {
      validators: [this.vs.camposIguales('password' , 'passwordConfirm') ]
    }
  )

  campoNoValido(campo: string){
    return this.miForm.get(campo)?.invalid &&
      this.miForm.get(campo)?.touched;
  }

  constructor(private fb: FormBuilder,
              private vs: ValidatorService)
  {

  }
  ngOnInit(): void {
    this.miForm.reset( {
      nombre: 'Javier Sanchez',
      email: 'alguien@alguien.com',
      username: 'HUNTER',
      password: '123',
      passwordConfirm: '123'
    })
  }


  guardar(){
    console.log(this.miForm.value);
    this.miForm.markAsTouched();
  }


}
