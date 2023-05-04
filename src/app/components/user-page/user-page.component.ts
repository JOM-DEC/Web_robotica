import { Component } from '@angular/core';

import { ControlProfileComponent } from '../control-profile/control-profile.component'
import { ControlStatsComponent } from '../control-stats/control-stats.component'
import { ControlStatusComponent } from '../control-status/control-status.component'
import { ControlNavBarComponent } from '../control-nav-bar/control-nav-bar.component'


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})

export class UserPageComponent {
  activeComponent: any = ControlNavBarComponent;

  showStatus() {
    this.activeComponent = 'ControlStatusComponent';
    console.log("boton 1 pulsado");
    
  }

  showStatistics() {
    this.activeComponent = 'ControlStatsComponent';
    console.log("boton 2 pulsado");
  }

  showProfile() {
    this.activeComponent = 'ControlProfileComponent';
    console.log("boton 3 pulsado");
  }

}
