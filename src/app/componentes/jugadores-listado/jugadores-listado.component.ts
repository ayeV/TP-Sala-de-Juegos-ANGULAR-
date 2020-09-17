import { Component, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from 'app/servicios/firestore.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {
  @ViewChild('dt') table: Table;

  public displayedColumns: string[] = ['jugador', 'email', 'edad'];
  public cols: any[];
  public listado;
  public cargando = true;
  public contador = 0;

  constructor(private db: FirestoreService) {

  }



  ngOnInit() {
    this.getData();
    this.cols = [{ field: 'jugador', header: 'Jugador'},{ field: 'email', header: 'Email'}, { field: 'edad', header: 'Edad'}]

  }

  getData() {
    let usuarios = [];
    this.db.getUsuarios().subscribe(x => {
      x.forEach(item => {
        usuarios.push ({
          jugador: item.data().nombre + ' ' + item.data().apellido,
          email: item.data().email,
          edad: item.data().edad
        });
      });
      this.cargando = false;
      this.listado = usuarios;
      console.log(this.listado);


    });
  }



}
