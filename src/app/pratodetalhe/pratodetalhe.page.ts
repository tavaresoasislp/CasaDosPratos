import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pratodetalhe',
  templateUrl: './pratodetalhe.page.html',
  styleUrls: ['./pratodetalhe.page.scss'],
})
export class PratodetalhePage implements OnInit {

  constructor(private router: Router) { }
  go2(){
    this.router.navigate(['menu/inicio']);
  }

  ngOnInit() {
  }

}
