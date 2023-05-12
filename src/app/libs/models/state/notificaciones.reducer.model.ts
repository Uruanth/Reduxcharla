import * as modelos from '../../models/index'
export interface NotificacionesReducerModel {
  fecha: Date;
  error: any;
  loading: boolean;
  notificaciones: modelos.Notificacion[];
}
