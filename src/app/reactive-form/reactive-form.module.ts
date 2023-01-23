import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { BasicoComponent } from './basico/basico.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { SwitchComponent } from './switch/switch.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicoComponent,
    DinamicoComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ReactiveFormModule { }
