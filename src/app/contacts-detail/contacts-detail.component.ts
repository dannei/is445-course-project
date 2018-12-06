import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FsService } from '../fs.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contact = {};

  getContactDetails(id) {
    this.fs.getContact(id)
      .subscribe(data => {
        console.log(data);
        this.contact = data;
      });
  }

  deleteContact(listNum) {
    this.fs.deleteContacts(listNum)
      .subscribe(res => {
          this.router.navigate(['/contacts']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  constructor(private route: ActivatedRoute, private router: Router, private fs: FsService) { }

  ngOnInit() {
    this.getContactDetails(this.route.snapshot.params['listNum']);
  }

}
