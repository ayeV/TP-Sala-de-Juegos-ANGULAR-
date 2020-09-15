
export class JuegoAnagrama {

    public words = ["VIOLETA", "HUEVO", "MANTECA", "CEREZA", "AMARILLO", "VERDE",
        "ABIERTO", "CASA", "DINERO",
        "PAZ", "TIEMPO", "AMIGO", "FLOR", "VIDRIO", "PASTO",
        "BOTE", "HUMANO", "TELEFONO"];

    public answer: string;
    public letters: [];
    public correctWord: string;
    public time: number;
    public score :number;


    displayWord = function () {
        this.answer = '';
        var wordIndex = Math.floor(Math.random() * this.words.length);
        this.correctWord = this.words[wordIndex];
        this.letters = this.correctWord.split(''); 
        this.shuffleLetters();
    }


    shuffleLetters = function () {
        var randomIndex;
        var size = this.letters.length;
        var temp;
        while (size > 0) {
            randomIndex = Math.floor(Math.random() * size--);
            temp = this.letters[size];
            this.letters[size] = this.letters[randomIndex];
            this.letters[randomIndex] = temp;
        }
    }


    validateWord(): boolean {
        if (this.answer.toUpperCase() === this.correctWord) {
            this.score = 10;
            return true;
        }

        return false;

    }












}
