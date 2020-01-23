import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../contact-list'
import { ContactserviceService } from '../contactservice.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  selectcontact: Contact;
  contacts: Contact[];
  selectedcontact: Contact;

  constructor(public contact: ContactserviceService) {
    this.selectcontact = this.contact.getcontact();
    this.contacts = CONTACTS;
    console.log("display called");
  }

  ngOnInit() {
  }

  delete(selectContact: Contact): void {
    this.contact.DeleteContact(selectContact.id);
    
  }
  edit(contact: Contact): void {
    this.selectedcontact = contact;
    this.contact.sendcontact(contact);
    console.warn(this.selectedcontact.email);
  }
}