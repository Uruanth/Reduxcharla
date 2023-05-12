import * as modelos from '../../models/state/index'
import * as acciones from '../actions/index'
import {createReducer, on} from "@ngrx/store";

const initialState: modelos.NotificacionesReducerModel = {
  notificaciones: [],
  error: undefined,
  fecha: new Date(),
  loading: false
}

export const notificacionesReducer = createReducer(
  initialState,
  on(acciones.CargarNotificaciones, state => ({...state, loading: true})),
  on(acciones.CargarNotificacionesExito, (state, {notificaciones}) => ({
    ...state,
    fecha: notificaciones[0].fecha,
    loading: false,
    notificaciones,
    error: undefined
  })),
  on(acciones.CargarNotificacionesError, (state, {error}) => ({...state, error}))
)
