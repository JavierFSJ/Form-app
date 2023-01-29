import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validatorService/validator.service';
import { EmailValidtorService } from '../../../shared/validator/email-validtor.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  miForm: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
      email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [this.emailValidtorService]],
      username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]]
    },
    {
      validators: [this.vs.camposIguales('password', 'passwordConfirm')]
    }
  )

  get emailErrorMsg() {
    const error = this.miForm.get('email')?.errors;
    if (error?.['required']) {
      return 'El email es requerido'
    }
    if (error?.['pattern']) {
      return 'El email no es valido'
    }
    if (error?.['emailTomado']) {
      return 'El email ya esta registrado'
    }
    return '';
  }

  campoNoValido(campo: string) {
    return this.miForm.get(campo)?.invalid &&
      this.miForm.get(campo)?.touched;
  }

  constructor(private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidtorService: EmailValidtorService) {

  }
  ngOnInit(): void {
    this.miForm.reset({
      nombre: 'Javier Sanchez',
      email: 'alguien@alguien.com',
      username: 'HUNTER',
      password: '123123',
      passwordConfirm: '123123'
    })
  }


  guardar() {
    console.log(this.miForm.value);
    this.miForm.markAsTouched();
  }





}
