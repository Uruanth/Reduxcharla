import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { LoginService } from "../../services/login.service";
import * as acciones from "../actions/index";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
@Injectable()
export class LoginEffect {
  constructor(private actions$: Actions, private loginService: LoginService) {}

  loginUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(acciones.login),
      exhaustMap((accion) =>
        this.loginService.iniciarSesion(accion.username, accion.password).pipe(
          mergeMap((usuario) => [acciones.loginExito({ usuario }), acciones.isLoged()]),
          catchError((error) => of(acciones.loginFallido({ error })))
        )
      )
    )
  );
}
