import { NgModule } from '@angular/core';
import { ChildAppComponent } from './child-app.component';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: ChildAppComponent
  }
];


@NgModule({
  declarations: [
    ChildAppComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    ChildAppComponent
  ]
})
export class ChildAppModule { }
