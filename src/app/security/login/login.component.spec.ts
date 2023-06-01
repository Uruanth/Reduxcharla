import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { LoginComponent } from "./login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppState } from "src/app/libs/models";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import * as modelos from "../../libs/models/index";
import { login } from "src/app/libs/state/actions";
const initialState: AppState = {
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

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: MockStore<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState })],
      declarations: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    spyOn(store, "dispatch").and.callFake(() => {});
  });

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  it("verificando llamado acciones", () => {
    component.acciones();
    expect(store.dispatch).toHaveBeenCalledWith(
      login({
        username: "test",
        password: "test",
      })
    );
  });
});
