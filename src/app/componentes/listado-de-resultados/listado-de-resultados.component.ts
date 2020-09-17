import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Puntaje } from 'app/clases/puntaje';
import { FirestoreService } from 'app/servicios/firestore.service';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})

export class ListadoDeResultadosComponent implements OnInit {
  public usuarios;
  public puntajes;
  public cargando = true;
  public contador = 0;
  @ViewChild(Table) table: Table;

  public displayedColumns: string[] = ['jugador', 'juego', 'puntaje'];
  public cols: any[];

  constructor(private db: FirestoreService) {
  }

  ngOnInit() {
    this.getData();
    this.cols = [{ field: 'jugador', header: 'Jugador'},{ field: 'juego', header: 'Juego'}, { field: 'puntaje', header: 'Puntaje'}]
    
  }

  getData() {
    let array = [];
    this.usuarios = {};
    this.db.getUsuarios().subscribe(x => {
      x.forEach(item => {
        this.usuarios[item.id] = {
          jugador: item.data().nombre + ' ' +  item.data().apellido
        }
      });

      this.db.getPuntajes().subscribe(x => {
        x.forEach(item => {
          Object.keys(item.data()).forEach(a => {
            array.push({
              jugador: this.usuarios[item.id].jugador,
              juego: a,
              puntaje: item.data()[a]
            });
            this.contador++;
          });
          this.table.reset();
        });
      });

      this.puntajes =  array;
      this.cargando = false;
    })
  }
}