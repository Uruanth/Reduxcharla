import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import * as modelos from '../models/index'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  public iniciarSesion(username: string, password: string): Observable<modelos.Usuario>{
    return this.http.post<modelos.Usuario>('/iniciarSesion', {username, password});
  }
}
