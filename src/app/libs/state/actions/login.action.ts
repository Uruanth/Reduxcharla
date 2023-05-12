import {createAction, props} from "@ngrx/store";
import * as modelos from '../../models/index'
export const login = createAction(
  '[LOGIN] -> Logear usuario',
  props<{ username: string, password: string }>()
);

export const loginExito = createAction(
  '[LOGIN] -> Logeo exitoso',
  props<{
    usuario: modelos.Usuario
  }>()
);

export const loginFallido = createAction(
  '[LOGIN] -> Logeo fallido',
  props<{error: any}>()
);

export const isLoged = createAction(
  '[LOGIN] -> Logeo guardado'
);
