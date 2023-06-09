import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have menu labels', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(5);
    expect(menuItems[0].textContent).toContain('Inicio');
    expect(menuItems[1].textContent).toContain('Lanches');
    expect(menuItems[2].textContent).toContain('Pratos');
    expect(menuItems[3].textContent).toContain('Sobremesas');
    expect(menuItems[4].textContent).toContain('Bebidas');
  });

  it('should have urls', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(5);
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/menu/inicio');
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/menu/lanches');
    expect(menuItems[2].getAttribute('ng-reflect-router-link')).toEqual('/menu/pratos');
    expect(menuItems[3].getAttribute('ng-reflect-router-link')).toEqual('/menu/sobremesas');
    expect(menuItems[4].getAttribute('ng-reflect-router-link')).toEqual('/menu/bebidas');
  });

});
