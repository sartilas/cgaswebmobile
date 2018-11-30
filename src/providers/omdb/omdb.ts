import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {map} from 'rxjs/operators';


@Injectable()
export class OmdbProvider {
  constructor(public http: HttpClient) {
  }
public getMovies(){
  return  this.http.get('http://www.omdbapi.com/?s=marvel&apikey=75522b56').pipe(
      map(response => response['Search'] )
    )   
}
public searchMovies(ex:string){
  return  this.http.get('http://www.omdbapi.com/?s='+ex+'&apikey=75522b56').pipe(
      map(response => response['Search'] )
    )   
}
}