import { Injectable } from '@angular/core';
import { Contact } from './contact';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
  contactdetail: Contact;
  status = true;
  contacts:Contact[];
  constructor(private http:HttpClient) { }
readonly rootURL = 'https://localhost:44309/api';
  AddContactDetail(contact:Contact){
    console.warn("database called");
   return this.http.post(this.rootURL+'/Contacts',contact);
  }
 
  GetAllContacts():Observable<Contact[]>{
   return this.http.get<Contact[]>(this.rootURL + '/Contacts/all') ;
  }
  EditContact(contact:Contact){
    console.warn("Edit called")
   return  this.http.put(this.rootURL+'/Contacts/'+contact.id,contact);
  }
  DeleteContact(id){
    console.warn("deleted");
   this.http.delete(this.rootURL+'/Contacts/'+id).toPromise();
  }

  getcontact() {
    return this.contactdetail;
  }

  getservice() {
    return this.status;
  }
GetContactToDisplay(id){
  this.http.get<Contact>(this.rootURL+'/Contacts/'+id);
}
  sendcontact(index) {
    if (index == null) {
      this.contactdetail = null;
      this.setservice();
    }
    else {
      this.contactdetail = index;
      this.sendservice();
    }
    console.log(this.contactdetail.address);

  }

  sendservice() {
    this.status = false;
  }

  setservice() {
    this.status = true;
  }
}
