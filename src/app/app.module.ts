import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './security/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { TablaAComponent } from './shared/tabla-a/tabla-a.component';
import { TablaBComponent } from './shared/tabla-b/tabla-b.component';
import { TablaCComponent } from './shared/tabla-c/tabla-c.component';

import {appState} from "./libs/state/AppState";
import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NzButtonModule} from "ng-zorro-antd/button";
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from './libs/state/effects/login.effect';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    TablaAComponent,
    TablaBComponent,
    TablaCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appState),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSpinModule,
    NzButtonModule,
    EffectsModule.forRoot([LoginEffect])
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
