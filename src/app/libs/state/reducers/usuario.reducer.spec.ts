import { reduce } from "rxjs";
import * as userReducer from "./usuario.reducer";

describe("ReducerUsurio", () => {
  const { initialState } = userReducer;

  it("probando estado inicial", () => {
    const action = {
      type: "unknow",
    };

    const state = userReducer.usuarioReducer(initialState, action);
    expect(state).toBe(initialState);
  });

  it("probando estado login", () => {
    const action = {
      type: "[LOGIN] -> Logear usuario",
    };

    const state = userReducer.usuarioReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("probando estado login exito", () => {
    const usuario = {
      nombre: "string",
      dni: "string",
      permission: [],
      rol: "string",
    };

    const action = {
      type: "[LOGIN] -> Logeo exitoso",
      usuario,
    };

    const state = userReducer.usuarioReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      nombre: usuario.nombre,
      permisos: usuario.permission,
      id: usuario.dni,
      loading: false,
      error: undefined,
    });
  });

  it("probando estado login error", () => {
    const error = "Error test";

    const action = {
      type: "[LOGIN] -> Logeo fallido",
      error,
    };

    const state = userReducer.usuarioReducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      loading: false,
      id: "",
      nombre: "",
      permisos: [],
      error,
    });
  });
});
