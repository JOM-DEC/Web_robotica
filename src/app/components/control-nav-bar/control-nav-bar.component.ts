import { Component } from '@angular/core';
import { ControlProfileComponent } from '../control-profile/control-profile.component'
import { ControlStatsComponent } from '../control-stats/control-stats.component'
import { ControlStatusComponent } from '../control-status/control-status.component'



@Component({
  selector: 'app-control-nav-bar',
  templateUrl: './control-nav-bar.component.html',
  styleUrls: ['./control-nav-bar.component.css']
})
export class ControlNavBarComponent {

  public activeComponent: any = 'ControlStatusComponent';

  public showStatus() {
    this.activeComponent = 'ControlStatusComponent';
    console.log("boton 1 pulsaado");
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
