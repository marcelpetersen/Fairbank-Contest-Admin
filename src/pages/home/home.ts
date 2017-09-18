import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { AngularFireOfflineDatabase } from "angularfire2-offline";

import { EntryPage } from "../entry/entry";
import { EntriesPage } from "../entries/entries";
import { WinnerPage } from "../winner/winner";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  changing: boolean = false;
  users: any = [];
  entries: any = [];
  entryCount: any = 0;
  lastEntry: any;

  constructor(public db: AngularFireOfflineDatabase, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.users = db.list('/users');

    this.entries = db.list('/entries', {
      query: {
        orderByChild: 'created',
        limitLast: 10
      }
    });

    this.entryCount = db.object('/entryCount');
    this.lastEntry = db.object('/lastentry');
  }

  chooseWinner() {
    this.navCtrl.push(WinnerPage);
  }

  exportCsv() {
    let alert = this.alertCtrl.create({
      title: 'Exporting CSV',
      subTitle: 'CSV has been exported successfully.',
      buttons: ['OK']
    });
    alert.present();
  }

  viewAll() {
    this.navCtrl.push(EntriesPage);
  }

  openEntry(entry) {
    this.navCtrl.push(EntryPage, { entry: entry });
  }

  getStateClass(state) {
    if (state == "offline") {
      return "state-offline";
    } else if (state == "online") {
      return "state-online";
    } else {
      return "state-unknown";
    }
  }

  getBatteryClass(battery) {
    if (battery > 80) {
      return "battery-great";
    } else if (battery > 60) {
      return "battery-good";
    } else if (battery > 40) {
      return "battery-ok";
    } else if (battery > 20) {
      return "battery-bad";
    } else {
      return "battery-dead";
    }
  }

  getStateName(state) {
    if (state == "online") {
      return "Online";
    } else {
      return "Offline";
    }
  }
}
