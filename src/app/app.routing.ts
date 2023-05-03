//Importar los modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes a los cuales les quiero hacer una pagina exclusiva 

import { HomeComponent } from "./components/home/home.component";
import { ErrorComponent } from "./components/error/error.component";
import { SignupComponent } from "./components/signup/signup.component";


//Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'signup', component: SignupComponent},

    //{path: 'pagina-de-pruebas', component: PaginaComponent}, //Añado dos veces para que sea opcional
    //{path: 'pagina-de-pruebas/:nombre/:apellidos', component: PaginaComponent}, //Si quiero pasarle más de un atributo
    {path: '**', component: ErrorComponent} //Página de error, debe ir la última
];

//Exporto el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
