import { Component, OnInit } from '@angular/core';
import { Ahorcado } from 'app/clases/ahorcado';
import { FirestoreService } from 'app/servicios/firestore.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  private upperKeys: Array<string> = 'QWERTYUIOP'.split('');
  private innerKeys: Array<string> = 'ASDFGHJKL'.split('');
  private lowerKeys: Array<string> = 'ZXCVBNM'.split('');


  readonly rowsOfKeys: Array<Array<string>> = [this.upperKeys, this.innerKeys, this.lowerKeys];
  public message: string;
  public won: boolean;
  public attempts = 0;
  public loggedUser;
  public ahorcado: Ahorcado;
  public dibujo;
  public estaJugando = true;

  constructor(private db: FirestoreService) {

    this.ahorcado = new Ahorcado();
    this.ahorcado.displayWord();
    this.dibujo = "../../../assets/imagenes/ahorcado1.png"
    this.loggedUser = JSON.parse(localStorage.getItem('user'));

  }

  ngOnInit(): void {
  }

  verificar(letra) {
    this.ahorcado.validateWord(letra);
    this.won = this.ahorcado.validateWinner();
    if(this.won)
    {
      this.estaJugando = false;
      this.message = "Ganaste!";
      this.db.postScore(this.loggedUser.uid,'Ahorcado',10);

    }
    console.log(this.won);
    console.log(this.ahorcado.attempts);

    switch (this.ahorcado.attempts) {
      case 5:
        this.dibujo = "../../../assets/imagenes/ahorcado2.png"
        break;
      case 4:
        this.dibujo = "../../../assets/imagenes/ahorcado3.png"
        break;

      case 3:
        this.dibujo = "../../../assets/imagenes/ahorcado4.png"
        break;
      case 2:
        this.dibujo = "../../../assets/imagenes/ahorcado5.png"
        break;
      case 1:
        this.dibujo = "../../../assets/imagenes/ahorcado6.png"
        break;
      case 0:
        this.dibujo = "../../../assets/imagenes/ahorcado7.png"
        this.estaJugando = false;
        break;


      default:
        break;
    }

  }

  newGame() {
    this.ahorcado = new Ahorcado();
    this.attempts = 0;
    this.dibujo = "../../../assets/imagenes/ahorcado1.png"
    this.ahorcado.displayWord();
    this.won = false;
    this.estaJugando = true;
    this.message = '';
  }


}
