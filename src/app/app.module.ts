import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Asegúrate de tener esta importación

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { LogginComponent } from './loggin/loggin.component';
import { AutoresComponent } from './autores/autores.component';
import { ReservasComponent } from './reservas/reservas.component';
import { CatologoComponent } from './catologo/catologo.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    LogginComponent,
    AutoresComponent,
    ReservasComponent,
    CatologoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
