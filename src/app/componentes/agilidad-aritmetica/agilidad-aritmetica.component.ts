import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})

export class AgilidadAritmeticaComponent implements OnInit {
  @Output()
  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoAgilidad;
  ocultarVerificar: boolean;
  mostrarNuevoJuego: boolean;
  Tiempo: number;
  repetidor: any;
  public estaJugando: boolean;

  public n1: number;
  public n2: number;
  public operators;
  public operator: string;



  ngOnInit() {


  }
  constructor() {
    this.operators = ['+', '-', '*'];
    this.ocultarVerificar = true;
    this.mostrarNuevoJuego = true;
    this.Tiempo = 10;
    this.nuevoJuego = new JuegoAgilidad();
    this.estaJugando = false;

  }



  NuevoJuego() {
    this.estaJugando = true;
    this.ocultarVerificar = false;
    this.nuevoJuego = new JuegoAgilidad();
    this.GenerarOperaciones();
    this.mostrarNuevoJuego = false;

    this.repetidor = setInterval(() => {

      this.Tiempo--;
      if (this.Tiempo == 0) {

        this.Verificar();



      }
    }, 900);

  }


  Verificar() {
    if (this.n1 != null && this.n2 != null && this.nuevoJuego.numeroIngresado != null) {
      this.estaJugando = false;
      this.mostrarNuevoJuego = true;
      var resultado;
      switch (this.operator) {
        case '+':
          resultado = this.n1 + this.n2;

          break;

        case '*':
          resultado = this.n1 + this.n2;

          break;

        case '-':
          resultado = this.n1 - this.n2;

          break;



      }
      debugger;

      this.nuevoJuego.gano = this.nuevoJuego.numeroIngresado == resultado;
    }


    clearInterval(this.repetidor);
    this.mostrarNuevoJuego = true;
    this.Tiempo = 10;
    this.estaJugando = false;
    this.ocultarVerificar = true;
  }


  GenerarOperaciones() {
    this.n1 = Math.floor(Math.random() * 50);
    this.n2 = Math.floor(Math.random() * 10);

    var opindex = Math.floor(Math.random() * 3);
    this.operator = this.operators[opindex];
  }
}
