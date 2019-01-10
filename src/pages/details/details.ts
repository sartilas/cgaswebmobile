import { FavorisProvider } from './../../providers/favoris/favoris';
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
  isFavorite: boolean = false;
  favorite: boolean = false;
 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public donnees:OmdbProvider,
    public favorisProvider: FavorisProvider) { console.log(this.navParams.get('item'));
    this.favorisProvider.isFavortieMovie(this.navParams.get('item')).then((favorite) =>{this.isFavorite=favorite})  
    this.donnees.getDetails(this.navParams.get('item')).subscribe((listDetails) =>{ console.log(listDetails);
    this.data = listDetails;  
  });  }
     
      toggleFavorite() {
        if (this.isFavorite) {
          this.isFavorite = false;
          this.favorisProvider.removeFavoriteMovie(this.data)
        } else {
          this.isFavorite = true;
          this.favorisProvider.addFavoriteMovie(this.data)          
        }
      }
    }

  