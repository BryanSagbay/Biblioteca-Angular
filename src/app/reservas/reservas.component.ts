import { Component } from '@angular/core';
import { Libros } from '../model/libros';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent {
  libro:Libros = new Libros();
  bandera: boolean=false;
  libros: Libros[] = [];
  nombreLibro: string = ''; // Asegúrate de que nombreLibro sea de tipo string

constructor(private apiService:ApiService){}



ngOnInit(){
  this.apiService.libros().subscribe( (data:Libros[]) => {
   this.libros = data
  })
  this.libro=new Libros();
  }


  MostrarDatos(){
    if(this.bandera==false){
    this.apiService.libros().subscribe( (data:Libros[]) => {
      this.libros = data
    })
    this.libro=new Libros();
  }}
  
}
