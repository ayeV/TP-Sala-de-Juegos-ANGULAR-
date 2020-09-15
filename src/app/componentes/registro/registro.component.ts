import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Usuario } from '../../clases/usuario';
import { AuthenticationService } from 'app/servicios/authentication-service';
import { AlertService } from 'app/servicios/alertService';
import { FirestoreService } from 'app/servicios/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario = new Usuario();
  public errorMessage: string;

  constructor(
    private authService: AuthenticationService,
    private alertService: AlertService,
    public router: Router,
    private dbService: FirestoreService

  ) { }

  ngOnInit() {
  }

  Registrarse() {
    this.alertService.clear();

    if (this.usuario.email != null && this.usuario.clave != null && this.usuario.claveRepetida != null) {
      if (this.usuario.clave == this.usuario.claveRepetida) {
      
        this.authService.RegisterUser(this.usuario.email, this.usuario.clave).then((res) => {
          this.router.navigate(['Login']);
          this.dbService.postUser(res.user.uid,this.usuario);
        }).catch((ex) => {
          this.errorMessage = this.ErrorMessageBuilder(ex.code);
          this.alertService.error(ex);
        });
      }
      else {
        this.alertService.error("La clave y la clave repetida deben ser iguales.");

      }

    }
  }

  Cancelar() {
    this.router.navigate(['Login']);

  }

  ErrorMessageBuilder(firebaseCode) {
    switch (firebaseCode) {
      case "auth/invalid-email":
        return "El email no es válido.";
      case "auth/email-already-exists":
        return "Otro usuario ya está utilizando el email proporcionado.";
      case "auth/invalid-password":
        return "Clave incorrecta.";
        case  "auth/wrong-password":
          return "Clave incorrecta.";
      default:
        return "Parece que algo salio mal, intente de nuevo mas tarde.";

    }
  }

  }
