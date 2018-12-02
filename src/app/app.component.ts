import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadedFeature = 'recipe';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDFqQcZEC8rCE-PB85zKLQ2xpKtHMaH_4o',
      authDomain: 'ng-recipe-book-fdfe1.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
