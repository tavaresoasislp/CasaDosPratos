import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {

  constructor() { }
  isModalOpen = false;
  isModalOpen2 = false;
  isModalOpen3 = false;
  isModalOpen4 = false;
  isModalOpen5 = false;
  isModalOpen6 = false;

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
  ngOnInit() {
  }

}
