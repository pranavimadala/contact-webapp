import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedComponent } from './addressbook/shared/shared.component';
import { AddComponent } from './addressbook/add/add.component';
const routes:Routes=[
  {
    path:'',
  component:SharedComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
