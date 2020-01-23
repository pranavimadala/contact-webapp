import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './add/add.component';
import { SharedComponent } from './shared/shared.component';
import { DisplayComponent } from './display/display.component';
export const routes: Routes = [
  {
      path:'',
      component:SharedComponent,
    children: [
      { path: 'add', component: AddComponent },
      {path:"display/:id", component:DisplayComponent},
      {path:"add/:name",component:AddComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressbookRoutingModule { }
