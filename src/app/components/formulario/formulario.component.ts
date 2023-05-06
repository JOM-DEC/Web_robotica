import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string;
  email: string;
  mensaje: string;
 
  constructor() {
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }
  
  submitForm() {
    // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, usando un servicio de API o enviando un correo electrónico.
    console.log('Formulario enviado');
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Mensaje:', this.mensaje);
  }
}
