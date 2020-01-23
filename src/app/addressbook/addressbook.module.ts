import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { AddressbookRoutingModule, routes} from './addressbook-routing.module';

import { RouterModule, Router } from '@angular/router';
import { AddComponent} from './add/add.component';
import { DisplayComponent} from './display/display.component';
import { SharedComponent } from './shared/shared.component';
import { TitleComponent} from './title/title.component';
import { SidebarComponent} from './sidebar/sidebar.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    
    AddComponent,
    DisplayComponent,
    SharedComponent,
    TitleComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AddressbookRoutingModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[AddComponent],
  providers: [],
  bootstrap: []
})
export class AddressbookModule { }
