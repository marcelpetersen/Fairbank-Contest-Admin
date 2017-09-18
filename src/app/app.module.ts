import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireOfflineModule } from 'angularfire2-offline';

import { MomentModule } from 'angular2-moment';
import { NgPipesModule } from 'ngx-pipes';

import { HomePage } from '../pages/home/home';
import { EntryPage } from "../pages/entry/entry";
import { EntriesPage } from "../pages/entries/entries";
import { WinnerPage } from "../pages/winner/winner";

import { EntryPageModule } from "../pages/entry/entry.module";
import { EntriesPageModule } from "../pages/entries/entries.module";
import { WinnerPageModule } from "../pages/winner/winner.module";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { NativeStorage } from '@ionic-native/native-storage';
import { Network } from '@ionic-native/network';

import { AutoCompleteModule } from 'ionic2-auto-complete';

export const firebaseConfig = {
  apiKey: "AIzaSyBMbOaJ85SrqjcTbZ94Ci6mKQdUlTlWyL8",
  authDomain: "fairbank-ac031.firebaseapp.com",
  databaseURL: "https://fairbank-ac031.firebaseio.com",
  projectId: "fairbank-ac031",
  storageBucket: "fairbank-ac031.appspot.com",
  messagingSenderId: "630523913624"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireOfflineModule,
    MomentModule,
    NgPipesModule,

    EntryPageModule,
    EntriesPageModule,
    WinnerPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EntryPage,
    EntriesPage,
    WinnerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    NativeStorage,
    Network,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
