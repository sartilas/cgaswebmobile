import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailseriePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailserie',
  templateUrl: 'detailserie.html',
})
export class DetailseriePage {


  public data:Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public donnees:OmdbProvider) {
    this.donnees.getDetails(this.navParams.get('item')).subscribe((listDetails) =>{
      this.data = listDetails;
    });  }

  }

}
