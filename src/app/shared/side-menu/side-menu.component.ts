import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  templateMenu: MenuItem[] = [
    { texto: 'basico', ruta: 'form/basico' },
    { texto: 'dinamico', ruta: 'form/dinamico' },
    { texto: 'switches', ruta: 'form/switch' },
  ];

  reactiveMenu: MenuItem[] = [
    { texto: 'basico', ruta: 'reactive/basico' },
    { texto: 'dinamico', ruta: 'reactive/dinamico' },
    { texto: 'switches', ruta: 'reactive/switch' },
  ];

  authMenu: MenuItem[] = [
    { texto: 'register', ruta: 'validations/register' },
    { texto: 'login', ruta: 'validations/login' },
  ]


}
