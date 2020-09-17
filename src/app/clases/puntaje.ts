import { Usuario } from "./usuario";

export class Puntaje{

    public puntaje: number;
    public jugador: string;
    public juego: string;

    constructor(puntaje,jugador, juego)
    {
        this.puntaje = puntaje;
        this.jugador = jugador;
        this.juego = juego;
    }
}