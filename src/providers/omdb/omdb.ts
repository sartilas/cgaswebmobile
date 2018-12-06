import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {map} from 'rxjs/operators';


@Injectable()
export class OmdbProvider {
  constructor(public http: HttpClient) {
  }
public searchMovies(ex:string,type:string){
  return  this.http.get('http://www.omdbapi.com/?s='+ex+'&type='+type+'&apikey=75522b56').pipe(
      map(response => response['Search'] )
    )   
}
public getDetails(id:string){
  return  this.http.get('http://www.omdbapi.com/?i='+id+'&apikey=75522b56').pipe();
  
}
}