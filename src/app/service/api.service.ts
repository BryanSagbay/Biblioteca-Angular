import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libros } from '../model/libros';
import { Autor } from '../model/autor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
    /* URL DONDE SE ENCUENTRA LA API*/
    private urlEndPoint: string = 'https://app-5abe991f-dee3-4e92-a5fb-cf539f8e7246.cleverapps.io/api';
    /*CONSTRUCTRO DE HTTP*/
    constructor(private http: HttpClient) {}
    /*OBTIENE LOS DATOS DEL API MEDIANTE UN GET */
    libros(): Observable<Libros[]> {
      return this.http.get<Libros[]>(`${this.urlEndPoint}/libros`);
  
        }   

    autores():Observable<Autor[]>{
      return this.http.get<Autor[]>(`${this.urlEndPoint}/autores`);
    }
    
         //consumn post Api
    guardarlibros(libros: Libros): Observable<Libros>{
      return this.http.post<Libros>(`${this.urlEndPoint}/guardarLibros`, libros);
      }
      //udapte Api
      actualizarlibros(libros: Libros): Observable<Libros> {
        return this.http.put<Libros>(`${this.urlEndPoint}/actualizarlibros`, libros)
      }
      //consume delete api
      eliminarlibros(id: number): Observable<Libros> {
      return this.http.delete<Libros>(`${this.urlEndPoint}/eliminarlibros/${id}`)
    }
    //buscar por nombre
    buscarLibrosPorNombre(nombreLibro: string): Observable<Libros[]> {
      return this.http.get<Libros[]>(`${this.urlEndPoint}/libros/nombre?nombreLibro=${nombreLibro}`);
    }
    
}
