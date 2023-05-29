import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PratodetalhePageRoutingModule } from './pratodetalhe-routing.module';

import { PratodetalhePage } from './pratodetalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PratodetalhePageRoutingModule
  ],
  declarations: [PratodetalhePage]
})
export class PratodetalhePageModule {}
