import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  //TODO: TEMP

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miForm: FormGroup = this.fb.group(
    {
      nombre: ['', [Validators.required , Validators.pattern(this.nombreApellidoPattern)]],
      email: ['', [Validators.required , Validators.pattern(this.emailPattern)]],
    }
  )

  campoNoValido(campo: string){
    return this.miForm.get(campo)?.invalid &&
      this.miForm.get(campo)?.touched;
  }



  constructor(private fb: FormBuilder) {
    this.miForm.reset( {
      nombre: 'Javier Sanchez',
    })
  }


  guardar(){
    console.log(this.miForm.value);
    this.miForm.markAsTouched();
  }


}
