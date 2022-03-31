import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuoRoutingModule } from './quo-routing.module';
import { QuoComponent } from './quo.component';


@NgModule({
  declarations: [
    QuoComponent
  ],
  imports: [
    CommonModule,
    QuoRoutingModule
  ]
})
export class QuoModule { }
