import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit{

  miForm: FormGroup = this.fb.group({
    genero: ['M' , Validators.required],
    notificaciones: [false , Validators.required],
    condiciones: [true , Validators.required],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
    condiciones: true,
  };

  constructor( private fb: FormBuilder){}

  ngOnInit(): void {
    this.miForm.setValue({...this.persona});

    this.miForm.get('condiciones')?.valueChanges
      .subscribe( value => {console.log('Condiciones' , value)} )

    this.miForm.get('genero')?.valueChanges
      .subscribe( value => {console.log('Genero' , value)} )

    this.miForm.get('notificaciones')?.valueChanges
      .subscribe( value => {console.log('Notificaciones' , value)} )

    this.miForm.valueChanges.subscribe(value => {
      this.persona = {...value}
    });
  }

  save(){

    if(this.miForm.invalid){
      console.log('Faltan campos obligatorios');
      return;
    }

    this.persona = {...this.miForm.value};
    console.log('Guardando persona ... ', this.persona);
  }

}
