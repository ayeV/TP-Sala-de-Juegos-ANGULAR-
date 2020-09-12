import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from 'app/servicios/authentication-service';

import { Usuario } from '../../clases/usuario';
import { AlertService } from 'app/servicios/alertService';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario = new Usuario();
  logeando = true;
  public errorMessage: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private authService: AuthenticationService,
    public dialog: MatDialog) {

  }

  ngOnInit() {
  }

  Entrar() {
    this.alertService.clear();

    if (this.usuario.email != null && this.usuario.clave != null) {
      this.authService.SignIn(this.usuario.email, this.usuario.clave).then((res) => {
        this.router.navigate(['/Principal']);
      }).catch((ex) => {
        this.errorMessage = this.ErrorMessageBuilder(ex.code);
        this.alertService.error(this.errorMessage);

      });
    }
  }

  ErrorMessageBuilder(firebaseCode) {
    switch (firebaseCode) {
      case "auth/invalid-email":
        return "El email no es válido.";
      case "auth/email-already-exists":
        return "Otro usuario ya está utilizando el email proporcionado.";
      case "auth/invalid-password":
        return "Clave incorrecta.";
      case "auth/wrong-password":
        return "Clave incorrecta.";
      default:
        return "Parece que algo salio mal, intente de nuevo mas tarde.";

    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.PasswordRecover(result).then((res) => { 
          this.alertService.success("Email enviado.");

        }).catch((ex) => {
          this.errorMessage = this.ErrorMessageBuilder(ex.code);
          this.alertService.error(this.errorMessage);
          console.log(this.errorMessage);

        });
      }
    });

  }





}
