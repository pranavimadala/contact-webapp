import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from '../contactservice.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
 title="AddressBook"
 contacts:Contact;
  constructor(private contact:ContactserviceService) { }

  ngOnInit() {
    console.log('Header constructor called');
  }
add()
{
this.contact.setservice();
}
}