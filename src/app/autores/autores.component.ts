import { Component } from '@angular/core';
import { Autor } from '../model/autor';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent {
  autor: Autor= new Autor();
  bandera: boolean=false;
  autores: Autor[] = [];

  constructor(private apiService:ApiService){}


ngOnInit(){
  this.apiService.autores().subscribe( (data:Autor[]) => {
   this.autores = data
  })
  this.autor=new Autor();
  }

  MostrarDatos(){
    if(this.bandera==false){
    this.apiService.autores().subscribe( (data:Autor[]) => {
      this.autores = data
    })
    this.autor=new Autor();
  }}

}

