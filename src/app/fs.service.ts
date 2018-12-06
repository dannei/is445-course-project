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
            key: data.listNum,
            name: data.name,
            email: data.email,
            phone: data.phone
          });
        });
        observer.next(contacts);
      });
    });
  }
  
  getContact(listNum: string): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(listNum).get().then((doc) => {
        let data = doc.data();
        observer.next({
          key: data.listNum,
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
          key: data.listNum,
        });
      });
    });
  }
  
  updateContacts(listNum: string, data): Observable<any> {
    return new Observable((observer) => {
      this.ref.doc(listNum).set(data).then(() => {
        observer.next();
      });
    });
  }
  
  deleteContacts(listNum: string): Observable<{}> {
    return new Observable((observer) => {
      this.ref.doc(listNum).delete().then(() => {
        observer.next();
      });
    });
  }

  constructor() { }
}
