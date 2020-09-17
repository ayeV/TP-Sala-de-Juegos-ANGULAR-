import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'app/servicios/authentication-service';
import { FirestoreService } from 'app/servicios/firestore.service';
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
  public loggedUser;



  ngOnInit() {


  }
  constructor(private db: FirestoreService, private auth: AuthenticationService) {
    this.operators = ['+', '-', '*'];
    this.ocultarVerificar = true;
    this.mostrarNuevoJuego = true;
    this.Tiempo = 10;
    this.nuevoJuego = new JuegoAgilidad();
    this.estaJugando = false;
    this.loggedUser = JSON.parse(localStorage.getItem('user'));

  }



  NuevoJuego() {
    this.estaJugando = true;
    this.ocultarVerificar = false;
    this.nuevoJuego = new JuegoAgilidad();
    this.nuevoJuego.gano = false;
    this.GenerarOperaciones();
    this.mostrarNuevoJuego = false;
    this.nuevoJuego.puntaje = 0;
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
          resultado = this.n1 * this.n2;

          break;

        case '-':
          resultado = this.n1 - this.n2;

          break;



      }
     

      this.nuevoJuego.gano = this.nuevoJuego.numeroIngresado == resultado;
      if(this.nuevoJuego.gano)
      {
        this.nuevoJuego.puntaje = 10;
        this.db.postScore(this.loggedUser.uid,'Agilidad aritmética',this.nuevoJuego.puntaje);

      }

    }

    this.nuevoJuego.terminado = true;


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
