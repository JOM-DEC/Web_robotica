//Importar los modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


//Importar componentes a los cuales les quiero hacer una pagina exclusiva 
import { HomeComponent } from "./components/home/home.component";
import { UserPageComponent } from "./components/user-page/user-page.component";
import { ControlProfileComponent } from "./components/control-profile/control-profile.component";
import { ControlStatusComponent } from "./components/control-status/control-status.component";
import { ControlStatsComponent } from "./components/control-stats/control-stats.component";
import { ControlEditProfileComponent } from "./components/control-edit-profile/control-edit-profile.component";
import { ErrorComponent } from "./components/error/error.component";
import { SignupComponent } from "./components/signup/signup.component";


//Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'userPage', component: UserPageComponent},
    {path: 'profile', component: ControlProfileComponent},
    {path: 'status', component: ControlStatusComponent},
    {path: 'stats', component: ControlStatsComponent},
    {path: 'edit-profile', component: ControlEditProfileComponent},
    {path: 'signup', component: SignupComponent},

    //{path: 'pagina-de-pruebas', component: PaginaComponent}, //Añado dos veces para que sea opcional
    //{path: 'pagina-de-pruebas/:nombre/:apellidos', component: PaginaComponent}, //Si quiero pasarle más de un atributo
    {path: '**', component: ErrorComponent} //Página de error, debe ir la última


];


//Exporto el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);
