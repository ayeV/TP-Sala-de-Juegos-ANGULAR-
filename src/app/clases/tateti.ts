import { Juego } from "./juego";

export class Tateti extends Juego {

    public board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    public ai = 'X';
    public human = 'O';
    public currentPlayer = this.human;


    public verificar() {
        return false;
    }

    equals3(a, b, c) {
        return a == b && b == c && a != '';
    }


    checkWinner() {
        let winner = null;

        // horizontal
        for (let i = 0; i < 3; i++) {
            if (this.equals3(this.board[i][0], this.board[i][1], this.board[i][2])) {
                winner = this.board[i][0];
            }
        }

        // Vertical
        for (let i = 0; i < 3; i++) {
            if (this.equals3(this.board[0][i], this.board[1][i], this.board[2][i])) {
                winner = this.board[0][i];
            }
        }

        // Diagonal
        if (this.equals3(this.board[0][0], this.board[1][1], this.board[2][2])) {
            winner = this.board[0][0];
        }
        if (this.equals3(this.board[2][0], this.board[1][1], this.board[0][2])) {
            winner = this.board[2][0];
        }

        let openSpots = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] == '') {
                    openSpots++;
                }
            }
        }

        if (winner == null && openSpots == 0) {
            return 'tie';
        } else {
            return winner;
        }
    }




    bestMove() {
        // AI to make its turn
        let bestScore = -Infinity;
        let move;
        let tablero = this.board.slice();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                // Is the spot available?
                if (tablero[i][j] == '') {
                    tablero[i][j] = this.ai;
                    let score = this.minimax(tablero, 0, false);
                    tablero[i][j] = '';
                    if (score > bestScore) {
                        bestScore = score;
                        move = { i, j };
                    }
                }
            }
        }
        this.board[move.i][move.j] = this.ai;
        this.currentPlayer = this.human;
    }

    public scores = {
        X: 10,
        O: -10,
        tie: 0
    };

    minimax(board, depth, isMaximizing) {
        let result = this.checkWinner();
        if (result !== null) {
            return this.scores[result];
        }

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    // Is the spot available?
                    if (board[i][j] == '') {
                        board[i][j] = this.ai;
                        let score = this.minimax(board, depth + 1, false);
                        board[i][j] = '';
                        bestScore = Math.max(score, bestScore);
                    }
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    // Is the spot available?
                    if (board[i][j] == '') {
                        board[i][j] = this.human;
                        let score = this.minimax(board, depth + 1, true);
                        board[i][j] = '';
                        bestScore = Math.min(score, bestScore);
                    }
                }
            }
            return bestScore;
        }
    }
}