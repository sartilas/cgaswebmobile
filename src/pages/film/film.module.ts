import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmPage } from './film';
import { OmdbProvider } from './../../providers/omdb/omdb';

@NgModule({
  declarations: [
    FilmPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmPage),
  ],
})
export class FilmPageModule {}
