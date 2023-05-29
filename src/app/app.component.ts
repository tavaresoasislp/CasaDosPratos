import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/menu/inicio', icon: 'home' },
    { title: 'Lanches', url: '/menu/lanches', icon: 'fast-food' },
    { title: 'Pratos', url: '/menu/pratos', icon: 'restaurant' },
    { title: 'Sobremesas', url: '/menu/sobremesas', icon: 'ice-cream' },
    { title: 'Bebidas', url: '/menu/bebidas', icon: 'wine' },
  ];

}
