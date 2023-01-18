import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})
export class BasicoComponent {

  @ViewChild('miForm') form!: NgForm;


  initForm = {
    producto: 'RXT 4080',
    precio: 0,
    existencias: 0
  }


  guardar(){
    console.log(this.form.value);
  }

  validName() : boolean {
    return this.form?.controls['producto']?.invalid
            && this.form?.controls['producto']?.touched;
  }

  precioValido() : boolean {
    return this.form?.controls['precio']?.touched &&
              this.form?.controls['precio'].value <= -1;
  }


  save(){
    console.log('Posteo correcto');
    this.form.reset({
      precio: 0,
      existencias: 0
    });
  }

}
