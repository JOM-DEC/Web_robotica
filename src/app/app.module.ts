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
import { ControlStatusComponent } from './components/control-status/control-status.component';
import { ControlMapComponent } from './components/control-map/control-map.component';
import { ControlProfileComponent } from './components/control-profile/control-profile.component';
import { ControlEditProfileComponent } from './components/control-edit-profile/control-edit-profile.component';
import { ControlStatsComponent } from './components/control-stats/control-stats.component';

import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { SigninComponent } from './components/signin/signin.component';
import { PasswordComponent } from './components/password/password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
    ControlStatusComponent,
    ControlMapComponent,
    ControlProfileComponent,
    ControlEditProfileComponent,
    ControlStatsComponent,
    SignupComponent,
    FooterComponent,
    PrivacyComponent,
    SigninComponent,
    PasswordComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FontAwesomeModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
