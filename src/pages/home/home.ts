import { OmdbProvider } from './../../providers/omdb/omdb';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public titre : string;
public resultat : any;

  constructor(public navCtrl: NavController,public omdb:OmdbProvider) {
    
    this.omdb.getMovies().subscribe((listMovies) => {
      console.log(listMovies);
      this.titre = listMovies;
  })
  }}
