import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EntryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html',
})
export class EntryPage {
  entry: any;
  
  howHearLabels: any = {
    'tv': 'TV', 'radio': 'Radio', 'newspaper': 'Newspaper', 'facebook-ad': 'Facebook Ad', 'blogto': 'BlogTO', 'social-media': 'Social Media', 
    'poster': 'Poster', 'postcard': 'Postcard', 'online': 'Online', 'word-of-mouth': 'Word-of-Mouth', 'other': 'Other'
  };

  rideOptions: any = [
    "Not at all important", "Slightly Important", "Important", "Fairly Important", "Very Important"
  ];

  rangeOptions: any = [
    'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'
  ];

  attendOptions: any = [
    'Not likely', 'Somewhat unlikely', 'Unsure', 'Likely', 'Very Likely'
  ];

  householdNames = {
    'single': 'Single', 'couple': 'Couple', '1-2-children': '1-2 Children', '3-4-children': '3-4 Children', '4-plus-children': '4+ Children'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.entry = navParams.get("entry");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntryPage');
  }

}
