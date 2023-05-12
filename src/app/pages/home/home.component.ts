import { Component, OnInit, OnDestroy } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../libs/state/AppState";
import {of, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public subscripciones: Subscription[] = [];
  public isLogeado = false;
  public cagando = of(false);
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    console.log('entro')
    this.cagando = this.store.select("usuario", "loading");
    this.subscripciones.push(
      this.store.select("usuario")
       .subscribe(usuario => {
         this.isLogeado = usuario.id.length > 0;
       })
       );
  }

  ngOnDestroy(): void {
    this.subscripciones.forEach(sub => sub.unsubscribe());
  }
}
