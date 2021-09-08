import {RouterModule, Routes} from '@angular/router'
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';


const APP_ROUTES: Routes = [
{path:'about', component: AboutComponent},
{path:'heroes', component: HeroesComponent},
{path:'home', component: HomeComponent},
{path:'heroe/:id', component: HeroeComponent},
{path:'buscar/:termino', component: BuscarComponent},
{path:'**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING =RouterModule.forRoot(APP_ROUTES);