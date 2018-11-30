import { OmdbProvider } from './../../providers/omdb/omdb';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
public titre : any;
public resultat : any;
public entree = '';

  constructor(public navCtrl: NavController,public omdb:OmdbProvider) {
    
    this.omdb.getMovies().subscribe((listMovies) => {
      console.log(listMovies);
      this.titre = listMovies;
  })
}
public search(){
  this.omdb.searchMovies(this.entree).subscribe((listMovies) => {
  this.titre = listMovies
}
)
}}