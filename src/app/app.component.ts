import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};
const config = {
  apiKey: "AIzaSyBBwZkSs5zgWj1I5P1HpVDegS2b-knoCq4",
  authDomain: "is445-course-project-95fab.firebaseapp.com",
  databaseURL: "https://is445-course-project-95fab.firebaseio.com",
  projectId: "is445-course-project-95fab",
  storageBucket: "is445-course-project-95fab.appspot.com",
  messagingSenderId: "375671009551"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-course-project';
  ngOnInit() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}
