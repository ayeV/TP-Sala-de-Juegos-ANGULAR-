
export interface ICard {
    id: number;
    imageId: string;
    revealed: boolean;
  }
  

export class Card  {

   
    public id: number;  
    public imageId: string;
    public revealed = false;

    constructor(id: number, imageId: string) {
        this.id = id;
        this.imageId = imageId;
      }






}