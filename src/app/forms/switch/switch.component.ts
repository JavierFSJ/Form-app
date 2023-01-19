import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {


  @ViewChild('form') form! : FormGroup;

  persona = {
    genero: 'F',
    notificaciones: false,
  }

  terminos: boolean = false;

  guardar(){
    console.log(this.form.value);
  }

}
