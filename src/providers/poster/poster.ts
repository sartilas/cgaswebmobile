import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {map} from 'rxjs/operators';


@Injectable()
export class PosterProvider {
  constructor(public http: HttpClient) {
  }
public getMovies(){
  return  this.http.get('img.omdbapi.com/?i=tt3896198&h=600&apikey=75522b56').pipe(
      map(response => response['Search'] )
    )   
}

}