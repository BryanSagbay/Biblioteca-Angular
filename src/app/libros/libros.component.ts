import { Component } from '@angular/core';
import { Libros } from '../model/libros';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

  libro: Libros= new Libros();
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


  cargarLibros() {
    this.apiService.libros().subscribe((data: Libros[]) => {
      this.libros = data;
    });
  }

  MostrarDatos(){
    if(this.bandera==false){
    this.apiService.libros().subscribe( (data:Libros[]) => {
      this.libros = data
    })
    this.libro=new Libros();
  }}
  
  
  guardarlibros() {
    if (this.bandera == false) {
      this.apiService.guardarlibros(this.libro).subscribe( (data:Libros) => {
        this.libros.push(data)
        this.libro = new Libros();
      });
  
  
    } else {
  
  
      this.apiService.actualizarlibros(this.libro).subscribe( (data:Libros) => {
        this.libros.push(data)
        this.bandera = false
  
      });
      this.libro = new Libros();
    }
  
   }
  
   eliminarJugador(libro: Libros) {
    this.apiService.eliminarlibros(libro.id).subscribe( (data:Libros) => {
      this.libros = this.libros.filter(j => j !== libro)
    });
   }
  
    modificarJugador(j:Libros){
      this.libro = j
      this.bandera= true
    }
    
    buscarLibros() {
      if (this.nombreLibro.trim() !== '') {
        this.apiService.buscarLibrosPorNombre(this.nombreLibro).subscribe(
          (librosEncontrados: Libros[]) => {
            this.libros = librosEncontrados;
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        this.cargarLibros(); // Si el campo de búsqueda está vacío, cargamos todos los libros nuevamente.
      }
    }
    actualizar():void{
      window.location.reload();
    }
    
}
