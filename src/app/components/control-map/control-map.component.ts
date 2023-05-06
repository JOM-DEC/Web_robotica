import { Component } from '@angular/core';
import { faCircleUp} from '@fortawesome/free-solid-svg-icons';
import { faCircleDown} from '@fortawesome/free-solid-svg-icons';
import { faCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { faCircleRight} from '@fortawesome/free-solid-svg-icons';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import swal from'sweetalert2';


@Component({
  selector: 'app-control-map',
  templateUrl: './control-map.component.html',
  styleUrls: ['./control-map.component.css']
})
export class ControlMapComponent {
  constructor(){
    this.bateria = 90;
  }

  //Alertas
  bateria;

  alertInformation(){
    swal.fire(
      'Información del Robot!',
      'Batería: ' + this.bateria + '%',
      'info'
    )
  }

  //Iconos
  arrowUp = faCircleUp;
  arrowDown = faCircleDown;
  arrowLeft = faCircleLeft;
  arrowRight = faCircleRight;
  home = faHome;
}
