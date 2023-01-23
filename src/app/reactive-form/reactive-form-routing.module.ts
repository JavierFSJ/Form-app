import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicoComponent } from './basico/basico.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { SwitchComponent } from './switch/switch.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basico', component: BasicoComponent },
      { path: 'dinamico', component: DinamicoComponent },
      { path: 'switch', component: SwitchComponent },
      { path: '**' , redirectTo: 'basico' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
