import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabfilmseriePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabfilmserie',
  templateUrl: 'tabfilmserie.html'
})
export class TabfilmseriePage {

  filmRoot = 'FilmPage'
  serieRoot = 'SeriePage'
  favorisRoot = 'FavorisPage'

  constructor(public navCtrl: NavController) {}

}
