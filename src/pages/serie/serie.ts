import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OmdbProvider } from './../../providers/omdb/omdb';
import { DetailseriePage } from './../detailserie/detailserie';


@IonicPage()
@Component({
  selector: 'page-film',
  templateUrl: 'Serie.html',
})
export class SeriePage {

public titre : any =[];
public resultat : any;
public entree = '';


  constructor(public navCtrl: NavController,public omdb:OmdbProvider) {

}
public search(){
  this.omdb.searchMovies(this.entree,'series').subscribe((listMovies) => {
    console.log(listMovies)
  this.titre = listMovies
}

)
}
public itemTapped(event, exemple){
  this.navCtrl.push(DetailseriePage, {item: exemple.imdbID}
  )}
}
