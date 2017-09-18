import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the WinnerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-winner',
  templateUrl: 'winner.html',
})
export class WinnerPage {
  entries: any;
  winners: any;

  winner: any = false;
  attempts: any = 0;

  constructor(public db: AngularFireOfflineDatabase, public afdb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.entries = db.list('/entries');
    this.winners = afdb.database.ref('/winners');

    this.entries.subscribe((entries) => {
      this.getWinner(entries);
    });
  }

  async getWinner(entries) {
      while(!this.winner && this.attempts < 5) {
        var entry = pickRandomItem(entries);

        var unique = await this.checkUnique(entry);
        if (unique) {
          this.winner = entry;    
          this.winners.update({ [entry.$key]: true });      
        }

        this.attempts++;
      }
  }

  async checkUnique(value) {
    var val = false;

    await this.winners.child(value.$key).once('value', function(snapshot) {
      val = !snapshot.exists() || !snapshot.val();
    });

    return val;
  }
}

function pickRandomItem(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
	return arr[randomIndex]
}
