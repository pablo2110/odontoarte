import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InicioComponent } from './components/inicio/inicio.component';
import { SobrenosotrosComponent } from './components/sobrenosotros/sobrenosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'sobrenosotros', component: SobrenosotrosComponent},
  {path: 'servicios', component: ServiciosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
