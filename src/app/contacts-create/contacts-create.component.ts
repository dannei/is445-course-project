import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FsService } from '../fs.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts-create',
  templateUrl: './contacts-create.component.html',
  styleUrls: ['./contacts-create.component.css']
})

export class ContactsCreateComponent implements OnInit {
  contactsForm: FormGroup;
  listNum:number=1;
  name:string='';
  email:string='';
  phone:number=0;

  constructor(private router: Router, private fs: FsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactsForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.required],
      'phone' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.fs.postContacts(form)
      .subscribe(res => {
          let id = res['key'];
          this.router.navigate(['/contacts-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
