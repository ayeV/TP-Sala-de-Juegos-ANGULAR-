import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
  public opened = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSideBar() {

    this.opened = !this.opened;
  }
}
