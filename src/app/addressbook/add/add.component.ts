import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Contact } from '../contact';
import { CONTACTS } from '../contact-list';
import { ContactserviceService } from '../contactservice.service';
import { __values } from 'tslib';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addressForm: FormGroup;
  contactslist: Contact[];
  status: boolean;
  submitted: boolean = false;
  selectcontact: Contact;
  update: Contact;
  contactModel: Contact;

  constructor(private fb: FormBuilder, private contact: ContactserviceService) {
    console.log("add called");

  }


  ngOnInit() {
    this.contactslist = CONTACTS;
    this.status = this.contact.getservice();
    if (this.contact.getservice()) {
      this.selectcontact = new Contact({});
    }
    else {
      this.selectcontact = this.contact.getcontact();
      this.update = this.selectcontact;
    }

    this.update = this.selectcontact;
    this.addressForm = this.fb.group({
      name: [this.selectcontact.name, Validators.required],
      email: [this.selectcontact.email, Validators.email],
      mobile: [this.selectcontact.mobile, Validators.maxLength(10)],
      landline: [this.selectcontact.landline, Validators.required],
      website: [this.selectcontact.website, Validators.required],
      address: [this.selectcontact.address, Validators.required],
    });
  }
  onSubmit() {
    this.contactModel = new Contact(this.addressForm.value);
    this.contact.AddContactDetail(this.contactModel).subscribe(
      res => {
        this.addressForm.reset();
      },
      err => {
        console.log(err);
      }

    )
    this.submitted = true;
    this.addressForm.reset();
  }
  edited() {
    this.contactModel = new Contact(this.addressForm.value);
      this.contactModel.id=this.selectcontact.id;
    this.contact.EditContact(this.contactModel);
  }
}