import {createAction, props} from "@ngrx/store";
import * as modelos from '../../models/index';


export const CargarNotificaciones = createAction(
  '[NOTIFICACIONES] -> Cargar notificaciones',
  props<modelos.Usuario>()
);
export const CargarNotificacionesExito = createAction(
  '[NOTIFICACIONES] -> Cargar notificaciones exito',
  props<{ notificaciones: modelos.Notificacion[] }>()
);

export const CargarNotificacionesError = createAction(
  '[NOTIFICACIONES] -> Cargar notificaciones error',
  props<{ error: any }>()
);
