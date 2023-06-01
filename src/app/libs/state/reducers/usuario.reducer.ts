import * as modelos from '../../models/index'
import * as actions from '../actions/index'
import {createReducer, on} from "@ngrx/store";

export const initialState: modelos.UsuarioReducerModel = {
  loading: false,
  error: undefined,
  id: "",
  nombre: "",
  permisos: []
}

export const usuarioReducer = createReducer(
  initialState,
  on(actions.login, state => ({
    ...state,
    loading: true
  })),
  on(actions.loginExito, (state, {usuario}) => ({
    ...state,
    nombre: usuario.nombre,
    permisos: usuario.permission,
    id: usuario.dni,
    loading: false,
    error: undefined
  })),
  on(actions.loginFallido, (state, {error}) => ({
    ...state,
    loading: false,
    id: "",
    nombre: "",
    permisos: [],
    error
  }))
)

