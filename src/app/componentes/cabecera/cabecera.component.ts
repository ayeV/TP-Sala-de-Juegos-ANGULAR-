import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/servicios/authentication-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AlertService } from 'app/servicios/alertService';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  opened = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService,

  ) { }

  ngOnInit() {
  }

  toggleSideBar() {

    this.opened = !this.opened;
  }

  salir() {
    this.authService.SignOut().then((res) => {
      this.router.navigate(['/Login']);
    }).catch((ex) => {
      this.alertService.error(ex);

    });

  }

}
