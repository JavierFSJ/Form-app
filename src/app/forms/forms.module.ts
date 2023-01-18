import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as Forms} from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { BasicoComponent } from './basico/basico.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { SwitchComponent } from './switch/switch.component';
import { CustomMinDirective } from './directives/custosm-min.directive';

@NgModule({
  declarations: [
    BasicoComponent,
    DinamicoComponent,
    SwitchComponent,
    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    Forms,
  ]
})
export class FormsModule { }
