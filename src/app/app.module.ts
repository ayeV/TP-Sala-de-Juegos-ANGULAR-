import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MiHttpService } from './servicios/mi-http/mi-http.service'; 
import { PaisesService } from './servicios/paises.service'; 
import { JugadoresService } from './servicios/jugadores.service'; 
import{ ArchivosJugadoresService} from './servicios/archivos-jugadores.service'; 
import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RuteandoModule } from './ruteando/ruteando.module';
import { ListadoComponent } from './componentes/listado/listado.component';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';

import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';

import { JuegoServiceService } from './servicios/juego-service.service';
import { ListadosComponent } from './componentes/listados/listados.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { AgmCoreModule } from '@agm/core';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';


import { FlexLayoutModule } from "@angular/flex-layout";
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { AlertaComponent } from './componentes/alerta/alerta.component';
import { DialogComponent } from './componentes/dialog/dialog.component';
import { PptComponent } from './componentes/ppt/ppt.component';
import{MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { MemotestComponent } from './componentes/memotest/memotest.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { CartaComponent } from './componentes/carta/carta.component';
import { CardService } from './servicios/card-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    MenuComponent,
    ListadoComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    CabeceraComponent,
    QuienSoyComponent,
    AnagramaComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    AlertaComponent,
    DialogComponent,
    PptComponent,
    TatetiComponent,
    MemotestComponent,
    AhorcadoComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RuteandoModule,
    HttpModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule,
    MatTooltipModule,
    HttpClientModule,
    MatCheckboxModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    MatExpansionModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    }),
    NgbModule,
    TableModule,
    PaginatorModule
    
  ],
  providers: [ JuegoServiceService, MiHttpService,PaisesService,ArchivosJugadoresService,JugadoresService,CardService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
