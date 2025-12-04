import { Routes } from '@angular/router';
import { Inicio } from './components/pages/inicio/inicio';
import { Peluquerias } from './components/pages/peluquerias/peluquerias';
import { Categorias } from './components/pages/categorias/categorias';
import { CMod } from './components/pages/c-mod/c-mod';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'peluquerias', component: Peluquerias },
    { path: 'categorias', component: Categorias },
    { path: 'mod', component: CMod },
    { path: '**', redirectTo: '' }
];
