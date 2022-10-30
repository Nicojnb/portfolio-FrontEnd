import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  myrole!: string;

  constructor(private tokenServ: TokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data['expectedRole'];
    const roles = this.tokenServ.getAuthorities();
    this.myrole = 'user';
    roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.myrole = 'admin';
      }
    });
    if (!this.tokenServ.getToken() || expectedRol.indexOf(this.myrole) === -1) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
