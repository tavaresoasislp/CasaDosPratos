import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PratodetalhePage } from './pratodetalhe.page';

describe('PratodetalhePage', () => {
  let component: PratodetalhePage;
  let fixture: ComponentFixture<PratodetalhePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PratodetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
