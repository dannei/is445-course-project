import { Component, OnInit } from '@angular/core';

import { DataSource } from '@angular/cdk/collections';
import { FsService } from '../fs.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  displayedColumns = ['listNum', 'name', 'email', 'phone'];
  dataSource = new ContactDataSource(this.fs);

  constructor(private fs: FsService) { }

  ngOnInit() {
  }

}

export class ContactDataSource extends DataSource<any> {

  constructor(private fs: FsService) {
    super()
  }

  connect() {
    return this.fs.getContacts();
  }

  disconnect() {

  }
}
