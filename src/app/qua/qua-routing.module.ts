import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteDataService, RouteData } from '../route-data.service';
import { QuaComponent } from './qua.component';

const routes: Routes = [{ 
  path: '',
  component: QuaComponent, 
  resolve: {
    RouteData: RouteDataService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuaRoutingModule { }
