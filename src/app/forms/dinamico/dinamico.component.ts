import { Component, ViewChild } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css']
})

export class DinamicoComponent {


  persona:  Persona = {
    nombre: 'Fernando',
    favoritos: [
      {id: 0 , nombre: 'Metal Gear'},
      {id: 1 , nombre: 'Silent Hill'}
    ]
  }

  @ViewChild('form') form! : FormGroup;


  guardar(){
    console.log('Formulario posteado');
  }


  eliminar(index: number){
    this.persona.favoritos.splice(index , 1);
  }


  add(){
    console.log(this.form)
    const value = this.form.controls['nombreJuego']?.value;

    if(value !== ''){

      /* Agregando */


      if(!this.persona.favoritos.length){
        this.persona.favoritos.push({id: 1 , nombre: value});
      }
      else{
        const id = this.persona.favoritos.length;
        this.persona.favoritos.push({id , nombre: value});
      }





    }

  }
}
