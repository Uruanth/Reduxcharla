import * as modelos from "./index";

export interface AppState {
  usuario: modelos.UsuarioReducerModel;
  notificaciones: modelos.NotificacionesReducerModel;
  tablas:  modelos.TablaAReducerModel;
  loger: modelos.LogerModel;
}
