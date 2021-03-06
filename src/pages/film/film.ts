import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OmdbProvider } from './../../providers/omdb/omdb';

/**
 * Generated class for the FilmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {

public titre : any;
public resultat : any;
public entree = '';

  constructor(public navCtrl: NavController,public omdb:OmdbProvider) {
    
  this.omdb.searchMovies(this.entree, 'movie').subscribe((listMovies) => {
  this.titre = listMovies;
  })
}

public itemTapped(event, exemple){
this.navCtrl.push(DetailsPage, {item: exemple.imdbID}
)}

public search(){
this.omdb.searchMovies(this.entree,'movie').subscribe((listMovies) => {
this.titre = listMovies
}
);
}
}
