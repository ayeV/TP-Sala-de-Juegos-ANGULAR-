
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {

  nuevoJuego: JuegoAdivina;
  Mensajes:string;
  ocultarVerificar:boolean;
 
  constructor() { 
    this.nuevoJuego = new JuegoAdivina();
    console.info("numero Secreto:",this.nuevoJuego.numeroSecreto);  
    this.ocultarVerificar=false;
    this.generarnumero();
  }

  generarnumero() {
    this.nuevoJuego.numeroIngresado= null;
    this.nuevoJuego.generarnumero();
  }

  verificar()
  {
    this.ocultarVerificar=true;
    console.info("numero Secreto:",this.nuevoJuego.gano);  
    if (this.nuevoJuego.verificar()){
      
      this.nuevoJuego.numeroSecreto=0;
      this.Mensajes = "Acertaste!";
      this.nuevoJuego.puntaje++;

    }
    else
    {
     this.Mensajes =  this.nuevoJuego.retornarMensajes();
    }
  }  

 
  ngOnInit() {
  }

}
