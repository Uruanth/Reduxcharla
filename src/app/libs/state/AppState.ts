import * as modelos from '../models/index'
import * as reducers from './reducers/index'
import {ActionReducerMap} from "@ngrx/store";


export const appState: ActionReducerMap<modelos.AppState> = {
  notificaciones: reducers.notificacionesReducer,
  tablas: reducers.tablaAReducer,
  usuario: reducers.usuarioReducer,
  loger: reducers.LogerReducer
}
