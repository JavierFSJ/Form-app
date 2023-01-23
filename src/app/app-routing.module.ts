import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'form', loadChildren: ()=> import('./forms/forms.module').then( m => m.FormsModule) },
  { path: 'reactive' , loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
