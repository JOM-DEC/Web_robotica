import { Component, OnInit } from '@angular/core';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';

declare function test(): any


@Component({
  selector: 'app-control-map',
  templateUrl: './control-map.component.html',
  styleUrls: ['./control-map.component.css']
})

export class ControlMapComponent implements OnInit {

  //myScriptElement: HTMLScriptElement
  constructor() {
    this.bateria = 90;
    
    //Opción 1
    /*
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "main.js" 
    document.body.appendChild(this.myScriptElement);
    */
  }

  ngOnInit(): void {
  }

  //Alertas
  bateria;

  alertInformation() {
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
