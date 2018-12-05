import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class FsService {
  ref = firebase.firestore().collection('contacts');

  getContacts(): Observable<any> {
    return new Observable((observer) => {
      this.ref.onSnapshot((querySnapshot) => {
        let contacts = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();
          contacts.push({
            listNum: data.listNum,
            name: data.name,
            email: data.email,
            phone: data.phone
          });
        });
        observer.next(contacts);
      });
    });
  }
  
  getContact(id: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).get().then((doc) => {
        let data = doc.data();
        observer.next({
          listNum: data.listNum,
          name: data.name,
          email: data.email,
          phone: data.phone
        });
      });
    });
  }
  
  postContacts(data): Observable<any> {
    return new Observable((observer) => {
      this.ref.add(data).then((doc) => {
        observer.next({
          key: doc.id,
        });
      });
    });
  }
  
  updateContacts(id: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(id).set(data).then(() => {
        observer.next();
      });
    });
  }
  
  deleteContacts(id: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(id).delete().then(() => {
        observer.next();
      });
    });
  }

  constructor() { }
}
