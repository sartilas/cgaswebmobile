import { DetailsPage } from './../details/details';
import { FavorisProvider } from './../../providers/favoris/favoris';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmPage } from '../film/film';
/**
 * Generated class for the FavorisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoris',
  templateUrl: 'favoris.html',
})
export class FavorisPage {

    favoriteMovies: object[] = [];
   
    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private favoriteMovieProvider: FavorisProvider
    ) {}
   
    ionViewDidLoad() {
      console.log("ionViewDidLoad MyMoviesPage");
    }
   
    ionViewWillEnter() {
      this.initFavoriteMovies();
    }
   
    private initFavoriteMovies() {
      this.favoriteMovieProvider
        .getFavoriteMovies()
        .then(favs => (this.favoriteMovies = favs));
    }
   
    findMovie() {
      this.navCtrl.push(FilmPage);
    }
   
    goToDetail(movie) {
      this.navCtrl.push(DetailsPage, movie);
    }
  }