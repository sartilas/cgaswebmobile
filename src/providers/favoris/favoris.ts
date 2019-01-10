import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

const MOVIE_KEY = "movie_";
 
@Injectable()
export class FavorisProvider {
  constructor(private storage: Storage) {
  
  }
 
  addFavoriteMovie(movie) { 
    this.storage.set(this.getMovieKey(movie), JSON.stringify(movie)).then(() => console.log('favoriteset'));
  }
 
  removeFavoriteMovie(movie) {
    this.storage.remove(this.getMovieKey(movie));
  }
 
  isFavortieMovie(movie) {
    return this.storage.get(this.getMovieKey(movie));
  }
 
  toogleFavoriteMovie(movie) {
    this.isFavortieMovie(movie).then(
      isFavorite =>
        isFavorite
          ? this.removeFavoriteMovie(movie)
          : this.addFavoriteMovie(movie)
    );
  }
 
  getMovieKey(movie) {console.log(movie.imdbID)
    return MOVIE_KEY + movie.imdbID;
  }
 
  getFavoriteMovies(): Promise<Object[]> {
    return new Promise(resolve => {
      let results: Object[] = [];
      this.storage
        .keys()
        .then(keys =>
          keys
            .filter(key => key.includes(MOVIE_KEY))
            .forEach(key =>
              this.storage.get(key).then(data => results.push(JSON.parse(data)))
            )
        );
      return resolve(results);
    });
  }
}