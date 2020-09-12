import { Component, OnInit } from '@angular/core';
import { Tateti } from 'app/clases/tateti';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {

  public game = new Tateti();

  constructor() { }

  ngOnInit(): void {
  }

  makeMove(i, j) {
    if (this.game.checkWinner() == null && this.game.board[i][j] == '') {
      this.game.board[i][j] = "O";
      this.game.bestMove();
    }

  }


  reset() {
    this.game.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
  }

}
