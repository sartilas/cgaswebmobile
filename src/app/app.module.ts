import { DetailsPageModule } from './../pages/details/details.module';
import { DetailseriePageModule } from './../pages/detailserie/detailserie.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { OmdbProvider } from '../providers/omdb/omdb';
import { PosterProvider } from '../providers/poster/poster';
import { HttpClientModule } from '@angular/common/http';
import { FavorisProvider } from '../providers/favoris/favoris';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    DetailsPageModule,
    DetailseriePageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OmdbProvider,
    PosterProvider,
    FavorisProvider
  ]
})
export class AppModule {}
