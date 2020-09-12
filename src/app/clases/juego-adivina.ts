import { Juego } from '../clases/juego'

export class JuegoAdivina extends Juego {
  numeroSecreto: number = 0;
  numeroIngresado = 0;
  constructor(nombre?: string, gano?: boolean, jugador?: string) {
    super("Adivina el número", gano, jugador);



  }
  public verificar() {
    if (this.numeroIngresado == this.numeroSecreto) {
      this.gano = true;
    }
    if (this.gano) {
      return true;
    } else {
      return false;
    }
  }
  public generarnumero() {
    debugger;
    this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
    console.info('numero Secreto:' + this.numeroSecreto);
    this.gano = false;
  }
  public retornarMensajes() {
    if (this.numeroIngresado < this.numeroSecreto) {
      return "Tu numero es mas chico";
    }
    else if (this.numeroIngresado > this.numeroSecreto) {
      return "Tu numero es mas grande";

    }
  }
}
