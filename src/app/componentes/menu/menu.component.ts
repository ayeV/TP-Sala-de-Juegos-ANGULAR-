import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationService } from 'app/servicios/authentication-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  opened = false;

  constructor(private route: ActivatedRoute, private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
        case 'PPT':
          this.router.navigate(['/Juegos/PPT']);
        break;
        case 'Tateti':
          this.router.navigate(['/Juegos/Tateti']);
        break;
        case 'Memotest':
          this.router.navigate(['/Juegos/Memotest']);
        break;
        case 'Ahorcado':
          this.router.navigate(['/Juegos/Ahorcado']);
        break;
        case 'Anagrama':
          this.router.navigate(['/Juegos/Anagrama']);
        break;

    }
  }
  toggleSideBar() {

    this.opened = !this.opened;
  }

  salir()
  {
    this.auth.SignOut();
    this.router.navigate(['/Login']);
  }


}
