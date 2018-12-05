import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsCreateComponent } from './contacts-create/contacts-create.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'contacts',
    component: ContactsComponent,
    data: { title: 'Contacts List' }
  },
  {
    path: 'contacts-details/:id',
    component: ContactsDetailComponent,
    data: { title: 'Contacts Details' }
  },
  {
    path: 'contacts-create',
    component: ContactsCreateComponent,
    data: { title: 'Create contacts' }
  },
  {
    path: 'contacts-edit/:id',
    component: ContactsEditComponent,
    data: { title: 'Edit contacts' }
  },
  { path: '',
    redirectTo: '/contacts',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsDetailComponent,
    ContactsCreateComponent,
    ContactsEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
