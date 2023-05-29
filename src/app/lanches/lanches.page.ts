import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {

  constructor() { }
  isModalOpen = false;
  isModalOpen2 = false;
  isModalOpen3 = false;
  isModalOpen4 = false;
  isModalOpen5 = false;

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
  ngOnInit() {
  }

}
