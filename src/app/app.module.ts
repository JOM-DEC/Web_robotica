import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { appRoutingProviders, routing } from './app.routing';
import { HomeInfoComponent } from './components/home-info/home-info.component';
import { HomeIntroComponent } from './components/home-intro/home-intro.component';
import { HomeInfoComponent2 } from './components/home-info/home-info.component';
import { HomeInfoLongComponent } from './components/home-info-long/home-info-long.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ErrorComponent,
    HomeInfoComponent,
    HomeIntroComponent,
    HomeInfoComponent2,
    HomeInfoLongComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
