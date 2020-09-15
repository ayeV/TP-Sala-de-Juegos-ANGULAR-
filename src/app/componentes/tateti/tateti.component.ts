import { Component, OnInit } from '@angular/core';
import { Tateti } from 'app/clases/tateti';
import { AuthenticationService } from 'app/servicios/authentication-service';
import { FirestoreService } from 'app/servicios/firestore.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  public game = new Tateti();
  public loggedUser;

  constructor(private db:FirestoreService, private auth:AuthenticationService) { 
    this.loggedUser = JSON.parse(localStorage.getItem('user'));

  }

  ngOnInit(): void {
  }

  makeMove(i, j) {

   if(this.game.board[i][j] == '' && this.game.checkWinner() == null)
   {
    this.game.board[i][j] = "O";
    this.game.getWinner();

    if(this.game.checkWinner() == null)
    {    this.game.bestMove();


    }

   }
   else if(this.game.checkWinner() != null){
     this.game.getWinner();
     this.db.postScore(this.loggedUser.uid,'tateti',this.game.score);
   }

  }


  reset() {
    this.game.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.game.tie = false;
    this.game.message = '';
  }

}
