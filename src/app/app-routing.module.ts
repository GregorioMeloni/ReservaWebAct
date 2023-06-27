import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioRolComponent } from './models/inicio-rol/inicio-rol.component';
import { HomeComponent } from './models/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inicio-rol', component: InicioRolComponent },
  // Otras rutas si las tienes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }