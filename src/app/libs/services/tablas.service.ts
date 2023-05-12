import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import * as modelos from '../models/index'

@Injectable({
  providedIn: 'root'
})
export class TablasService {
  constructor(private http: HttpClient) {
  }

  public getTablaA(username: string): Observable<modelos.TablaA> {
    return this.http.get<modelos.TablaA>('/tabla_a/${username}');
  }
}
