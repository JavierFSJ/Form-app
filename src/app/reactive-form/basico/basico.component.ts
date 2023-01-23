import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})
export class BasicoComponent implements OnInit {

  /*   miForm: FormGroup = new FormGroup({
    'nombre'          : new FormControl('RXT 4080'),
    'precio'          : new FormControl('1000'),
    'existencias'     : new FormControl('0'),
  }); */

  /* FormBuilder */
  miForm: FormGroup = this.fb.group({
    /* [vALOR , VALIDACIONES , VALIDACIONES ASINCRONAS] */
    nombre: [, [Validators.required, Validators.minLength(3)] ],
    precio: [, [Validators.required, Validators.min(0)] ],
    existencias: [ , [Validators.required, Validators.min(0)] ],
  })

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
    this.miForm.reset({
      nombre: 'RXT:4080',
      precio: 3000,
      existencias: 400,
    })
  }

  compaValido(campo: string){
    return this.miForm.controls[campo].errors
            && this.miForm.controls[campo].touched
  }

  save(){

    if( this.miForm.invalid){
      this.miForm.markAllAsTouched();
      return;
    }

    console.log(this.miForm.value);
    this.miForm.reset();
  }


}
