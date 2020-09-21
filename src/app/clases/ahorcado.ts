import { Letra } from "./letra";

export class Ahorcado
{
    public words = ["ROJO", "CASA", "MANTECA", "CEREZA", "AMARILLO", "VERDE",
    "ABIERTO", "DINERO",
    "PAZ", "TIEMPO", "AMIGO", "FLOR", "VIDRIO", "PASTO",
    "BOTE", "HUMANO", "TELEFONO"];

    public answer: string;
    public letters = [];
    public correctWord: string;
    public time: number;
    public score :number;
    public attempts = 6;


    displayWord = function () {
        this.answer = '';
        var wordIndex = Math.floor(Math.random() * this.words.length);
        this.correctWord = this.words[wordIndex];
        console.log(this.correctWord);
        for(var i= 0; i < this.correctWord.length; i++)
        {
            this.letters.push(new Letra(this.correctWord[i]));

        }
    }


    validateWord(letra) {
        let contador = 0;
        for(var i= 0; i < this.letters.length; i++)
        {
            console.log(this.letters[i].letter)
            if(letra == this.letters[i].letter)
            {
                this.letters[i].estaEncontrada = true;
                contador++;
            }

        }
        if(contador == 0)
        {
            this.attempts --;
        }
    }

    validateWinner(){
        let win = true;
        if(this.attempts!=0){
            for(var i= 0; i < this.letters.length; i++)
            {
                if(!this.letters[i].estaEncontrada)
                {
                    win = false;
                }
    
            }
        }else{
            win = false;
        }
        return win;
    }

}