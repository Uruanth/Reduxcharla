import * as modelos from "../../models/index";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { LoginEffect } from "./login.effect";
import { Observable, throwError } from "rxjs";
import { TestScheduler } from "rxjs/internal/testing/TestScheduler";
import { TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { provideMockActions } from "@ngrx/effects/testing";
import { LoginService } from "../../services/login.service";
import { isLoged, login, loginExito, loginFallido } from "../actions";

const initialState: modelos.AppState = {
  notificaciones: {
    notificaciones: [],
    error: undefined,
    fecha: new Date(),
    loading: false,
  },
  tablas: {
    columnas: {} as modelos.TablaA,
    error: undefined,
    loading: false,
  },
  usuario: {
    loading: false,
    error: undefined,
    id: "",
    nombre: "",
    permisos: [],
  },
  loger: {
    isLoged: true,
  },
};

describe("Login Effects", () => {
  const serviceTest = jasmine.createSpyObj("service", ["iniciarSesion"]);

  let store: MockStore<modelos.AppState>;
  let effects: LoginEffect;
  let actions: Observable<any>;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        LoginEffect,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        {
          provide: LoginService,
          useValue: serviceTest,
        },
      ],
    });

    effects = TestBed.inject(LoginEffect);
    store = TestBed.inject(MockStore);
    store.setState(initialState);

    testScheduler = new TestScheduler((actual, expected) => {
      console.log("actual", actual);
      console.log("expect", expected);
      expect(actual).toEqual(expected);
    });
  });

  it("should create effects", () => {
    expect(effects).toBeTruthy();
  });

  it("shold send login exito action", () => {
    //arrange
    const action = login({
      username: "test",
      password: "test",
    });

    const usuario = {
      nombre: "string",
      dni: "string",
      permission: [],
      rol: "string",
    };

    const outcome = loginExito({ usuario });
    const outcome2 = isLoged();

    //Act
    testScheduler.run(({ hot, cold, expectObservable }) => {
      actions = hot("-a", { a: action });
      const responseService = cold("-b|", { b: usuario });
      serviceTest.iniciarSesion.and.returnValue(responseService);
      //Assert
      expectObservable(effects.loginUsuario$).toBe("--(cd)", {
        c: outcome,
        d: outcome2,
      });
    });
  });

  it("login error", () => {
    //arrange
    const action = login({
      username: "test",
      password: "test",
    });

    const error = "error en el efecto test";
    const outcome = loginFallido({ error });

    // Act
    testScheduler.run(({hot, cold, expectObservable})=>{
      actions = hot("-a", {a: action});
      const responseService = cold("-#", undefined, error);
      serviceTest.iniciarSesion.and.returnValue(responseService);

      //Assert
      expectObservable(effects.loginUsuario$).toBe("--c", {
        c: outcome
      })
    });

  });




});
