import {createAction, props} from "@ngrx/store";
import * as modelos from '../../models/index';
export const cargarDatosTablaA = createAction(
  '[TABLA A] -> Cargar datos',
  props<{username: string}>()
);

export const cargarDatosTablaAExito = createAction(
  '[TABLA A] -> Cargar datos exito',
  props<modelos.TablaA>()
);

export const cargarDatosTablaAError = createAction(
  '[TABLA A] -> Cargar datos error',
  props<{error: any}>()
);

//TODO acciones tablas B y C
