import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const roles = next.data['roles'];

    if (this.authService.isAuthenticated() && this.authService.hasAnyRole(roles)) {
      return true;
    }

    
    this.router.navigate(['/logginUser']);
    return false;
  }
}
