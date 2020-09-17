import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }
  canActivate(): Observable<boolean> {
    return this.authenticationService.auth.authState.map( authState => {
      if(!authState) this.router.navigate(['/Login'])
      return !!authState;
    })
  }
}
