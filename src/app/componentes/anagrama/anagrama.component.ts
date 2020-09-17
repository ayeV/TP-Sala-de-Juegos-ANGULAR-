import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from 'app/clases/juego-anagrama';
import { AuthenticationService } from 'app/servicios/authentication-service';
import { FirestoreService } from 'app/servicios/firestore.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  public anagram: JuegoAnagrama;
  public message: string;
  public won: boolean;
  public attempts = 0;
  public loggedUser;


  constructor(private db: FirestoreService, private auth: AuthenticationService) {
    this.anagram = new JuegoAnagrama();
    this.won = false;
    this.loggedUser = JSON.parse(localStorage.getItem('user'));

  }

  ngOnInit() {
    this.displayWord();
  }

  displayWord() {
    this.attempts = 0;
    this.won = false;
    this.anagram.displayWord();
    console.log(this.anagram.correctWord);
  }

  validateWord() {
    if(this.anagram.answer.length > 0 && this.attempts <= 3)
    {
      this.attempts += 1;
      if (this.anagram.validateWord()) {
        this.won = true;
        this.message = "Palabra correcta!";
        this.db.postScore(this.loggedUser.uid,'Anagrama',this.anagram.score);


      }
      else
        this.message = "Palabra Incorrecta!"
     
  
    }
    if (this.attempts == 3)
    {        
      this.message = "Ya intentaste tres veces. Clickea en Siguiente si queres continuar."
      this.won = false;
      this.anagram.score -= 1;
      return;
    }
  
  }

  nextWord = function () {
    this.won = false;
    this.anagram.answer = '';
    this.message = '';
    this.attempts = 0;
    this.anagram.displayWord();

    console.log(this.anagram.correctWord);
  }


}
