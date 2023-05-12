import * as modelos from '../models/index'
import * as reducers from './reducers/index'
import {ActionReducerMap} from "@ngrx/store";
export interface AppState {
  usuario: modelos.UsuarioReducerModel;
  notificaciones: modelos.NotificacionesReducerModel;
  tablas:  modelos.TablaAReducerModel;
  loger: modelos.LogerModel;
}

export const appState: ActionReducerMap<AppState> = {
  notificaciones: reducers.notificacionesReducer,
  tablas: reducers.tablaAReducer,
  usuario: reducers.usuarioReducer,
  loger: reducers.LogerReducer
}
