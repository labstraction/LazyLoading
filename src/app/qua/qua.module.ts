import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuaRoutingModule } from './qua-routing.module';
import { QuaComponent } from './qua.component';


@NgModule({
  declarations: [
    QuaComponent
  ],
  imports: [
    CommonModule,
    QuaRoutingModule
  ]
})
export class QuaModule { }
