import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})
export class DinamicoComponent {

  miForm: FormGroup = this.fb.group({
    nombre: [ , [Validators.required , Validators.minLength(3)]],
    favoritos: this.fb.array([
     ['Metal Gear' , Validators.required],
     ['Halo' , Validators.required],
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('' , Validators.required);

  get favoritoArr(){
    return this.miForm.get('favoritos') as FormArray;
  }

  constructor(private fb : FormBuilder){}

  campoValido(campo: string){
    return this.miForm.controls[campo].errors
            && this.miForm.controls[campo].touched;
  }

  save(){
    if(this.miForm.invalid){
      return
    }
    console.log(this.miForm.value);
  }


  add(){
    if(this.nuevoFavorito.invalid){
      console.log('No es valido');
      return;
    }
    this.favoritoArr.push( this.fb.control(this.nuevoFavorito.value , Validators.required));
    this.nuevoFavorito.reset();
  }

  remove(index: number){
    console.log(index);
    this.favoritoArr.removeAt(index);
  }
}
