import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ICard,Card } from 'app/clases/card';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input() carta: ICard;    
  @Output() clicked = new EventEmitter();

  constructor() { }  

  cardClick() {        
    this.clicked.emit([this.carta.id, this.carta.imageId]);
  }
  ngOnInit()
  {
    
  }

}
