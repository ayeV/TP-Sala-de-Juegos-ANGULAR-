import { Component, OnInit } from '@angular/core';
import { Card } from 'app/clases/card';
import { AuthenticationService } from 'app/servicios/authentication-service';
import { CardService } from 'app/servicios/card-service.service';
import { FirestoreService } from 'app/servicios/firestore.service';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {


  public cards;
  public unsolved;
  public lastClicked = null;
  public revealedCards = 0;
  public cardIndex = 0;
  public waiting;
  public clicks;
  public cargado: boolean;
  public boardW = new Array(4);
  public boardH = new Array(4);
  public time: number;
  public repetidor: any;
  public isPlaying: boolean;
  public score: number;
  public loggedUser;

  constructor(private http: CardService,private db: FirestoreService, private auth: AuthenticationService) {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));

  }

  ngOnInit(): void {
    this.initGame();

  }

  ngOnDestroy(): void {
    clearInterval(this.repetidor);
    
  }

  initGame() {
    this.isPlaying = true;
    this.clicks = 0;
    this.score = 0;
    this.waiting = false;
    this.cards = [];
    this.lastClicked = null;
    this.revealedCards = 0;
    this.cardIndex = 0;
    this.unsolved = 8;
    this.http.getImageList().subscribe(data => {
      data.map(item => {
        this.cards.push(new Card(this.cardIndex, item.id));
        this.cards.push(new Card(this.cardIndex + 1, item.id));
        this.cardIndex += 2;
      });
      this.cards = this.shuffle(this.cards);
      this.cargado = true;
      this.time = 50;
      this.repetidor = setInterval(() => {
  
        if (this.unsolved == 0) {
          this.isPlaying = false;
          this.score = 10;
          this.db.postScore(this.loggedUser.uid,'Memotest',this.score);
          clearInterval(this.repetidor);
          console.log('ganaste');
        }
        this.time--;
        if (this.time == 0 && this.unsolved != 0) {
          this.isPlaying = false;
          clearInterval(this.repetidor);
          console.log('perdiste');
        }
      }, 900);
    });

  }


  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

    }
    return array;
  }

  handleCardClick([id, imageId]) {
    if (this.isPlaying) {
      if (!this.waiting) {
        this.clicks++;
        if (!this.isCardShown(id)) {
          this.showCard(id);
          if (this.lastClicked != null && this.lastClicked === imageId) {
            this.unsolved--;
            this.lastClicked = null;
            this.revealedCards = 0;
          } else {
            this.revealedCards++;
            if (this.revealedCards == 2) {
              this.waiting = true;
              setTimeout(() => {
                this.hideCard(id);
                this.hideCardByImageId(this.lastClicked);
                this.revealedCards = 0;
                this.lastClicked = null;
                this.waiting = false;
              }, 1000);
            } else {
              this.lastClicked = imageId;
            }
          }
        }
      }

    }

  }



  showCard(id: number): void {
    this.cards.map(card => card.id === id ? card.revealed = true : true)
  }

  hideCard(id: number): void {
    this.cards.map(card => card.id === id ? card.revealed = false : true)
  }

  hideCardByImageId(imageId: string): void {
    this.cards.map(card => card.imageId === imageId ? card.revealed = false : true)
  }

  isCardShown(id): boolean {
    return this.cards.find(card => card.id === id).revealed;
  }



}
