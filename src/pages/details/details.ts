import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OmdbProvider } from './../../providers/omdb/omdb';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public data:Object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public donnees:OmdbProvider) {
    this.donnees.getDetails(this.navParams.get('item')).subscribe((listDetails) =>{
      this.data = listDetails;
    });  }

 

