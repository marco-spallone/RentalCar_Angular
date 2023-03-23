import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {UsersComponent} from "./users/users.component";
import {UsersService} from "./services/users.service";

export const canActivateTeam: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(UsersService).canActivate(localStorage.getItem('token')!);
  };
