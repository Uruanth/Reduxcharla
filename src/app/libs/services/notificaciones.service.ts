import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as modelos from '../models/index'


@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  constructor(private http: HttpClient) { }

  public obtenerNotificaciones(dni: string): Observable<modelos.Notificacion[]>{
    return this.http.get<modelos.Notificacion[]>(`/notificaciones/${dni}`);
  }
}
