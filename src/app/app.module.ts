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
import { ControlHeaderComponent } from './components/control-header/control-header.component';
import { ControlNavBarComponent } from './components/control-nav-bar/control-nav-bar.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ControlStatusComponent } from './components/control-status/control-status.component';
import { ControlMapComponent } from './components/control-map/control-map.component';
import { ControlProfileComponent } from './components/control-profile/control-profile.component';
import { ControlEditProfileComponent } from './components/control-edit-profile/control-edit-profile.component';
import { ControlStatsComponent } from './components/control-stats/control-stats.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ErrorComponent,
    HomeInfoComponent,
    HomeIntroComponent,
    HomeInfoComponent2,
    HomeInfoLongComponent,
    ControlHeaderComponent,
    ControlNavBarComponent,
    UserPageComponent,
    ControlStatusComponent,
    ControlMapComponent,
    ControlProfileComponent,
    ControlEditProfileComponent,
    ControlStatsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
