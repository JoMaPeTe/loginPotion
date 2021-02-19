import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { UsersService } from '../users/users.service';

@Injectable()
export class CanActivateViaAuthGuardService implements CanActivate {

  constructor(private authService: UsersService , private router: Router) { }

  canActivate() {
      // If the user is not logged in we'll send them back to the home page
      if (!this.authService.getUserLogged() ) {
        window.alert('No estás logueado');
          this.router.navigate(['login']);
          return false;
      }

      return true;
  }
}
