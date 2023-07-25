import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogginComponent } from './loggin/loggin.component';
import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';
import { ReservasComponent } from './reservas/reservas.component';
import { CatologoComponent } from './catologo/catologo.component';

const routes: Routes = [
{  path:'',redirectTo:'Loggin',pathMatch:'full'},
{  path:'Loggin',  component:LogginComponent},
{  path:'Libros',  component:LibrosComponent},
{  path:'Autores',  component:AutoresComponent},
{  path:'Reservas',  component:ReservasComponent},
{  path:'Catalogo',  component:CatologoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
