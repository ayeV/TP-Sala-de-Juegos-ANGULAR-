import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import {Jugador} from '../../clases/jugador';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  public listado:any
  //miJugadoresServicio:JugadoresService
  
    constructor(serviceJugadores:JugadoresService) {
      this.listado =  [
        {usuario: 'Juan Perez',gano: true },
        {usuario: 'Juan Perez',gano: true },
        {usuario: 'Juan Perez',gano: true },
        {usuario: 'Juan Perez',gano: true }
  
      ];
     
    }
    


  ngOnInit() {
  
    
  }



  TraerTodos(){
/*     //alert("totos");
   // this.miJugadoresServicio.traertodos('jugadores/','todos').then(data=>{
      //console.info("jugadores listado",(data));
      //this.listado= data;

    }) */
  }
  TraerGanadores(){
/*    // this.miJugadoresServicio.traertodos('jugadores/','ganadores').then(data=>{
      //console.info("jugadores listado",(data));
   //   this.listado= data;

    }) */
  }
  TraerPerdedores(){
/*    // this.miJugadoresServicio.traertodos('jugadores/','perdedores').then(data=>{
      //console.info("jugadores listado",(data));
     // this.listado= data;

    }) */
  }

}
