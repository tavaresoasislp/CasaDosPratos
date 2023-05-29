import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.page.html',
  styleUrls: ['./pratos.page.scss'],
})
export class PratosPage implements OnInit {

  constructor() { }
  isModalOpen = false;
  isModalOpen2 = false;
  isModalOpen3 = false;
  isModalOpen4 = false;
  isModalOpen5 = false;
  isModalOpen6 = false;
  isModalOpen7 = false;
  isModalOpen8 = false;
  isModalOpen9 = false;
  isModalOpen10 = false;
  isModalOpen11 = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }
  setOpen3(isOpen: boolean) {
    this.isModalOpen3 = isOpen;
  }
  setOpen4(isOpen: boolean) {
    this.isModalOpen4 = isOpen;
  }
  setOpen5(isOpen: boolean) {
    this.isModalOpen5 = isOpen;
  }
  setOpen6(isOpen: boolean) {
    this.isModalOpen6 = isOpen;
  }
  setOpen7(isOpen: boolean) {
    this.isModalOpen7 = isOpen;
  }
  setOpen8(isOpen: boolean) {
    this.isModalOpen8 = isOpen;
  }
  setOpen9(isOpen: boolean) {
    this.isModalOpen9 = isOpen;
  }
  setOpen10(isOpen: boolean) {
    this.isModalOpen10 = isOpen;
  }
  setOpen11(isOpen: boolean) {
    this.isModalOpen11 = isOpen;
  }
  ngOnInit() {
  }

}
