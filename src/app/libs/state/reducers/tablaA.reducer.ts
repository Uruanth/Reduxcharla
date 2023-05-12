import * as acciones from '../actions/index'
import * as modelos from '../../models/index'
import {createReducer, on} from "@ngrx/store";

const initialState: modelos.TablaAReducerModel = {
  columnas: {} as modelos.TablaA,
  error: undefined,
  loading: false
}
export const tablaAReducer = createReducer(
  initialState,
  on(acciones.cargarDatosTablaA, state => ({...state, loading: true})),
  on(acciones.cargarDatosTablaAExito, (state, payload) => ({
    ...state,
    loading: false,
    error: undefined,
    columnas: payload
  })),
  on(acciones.cargarDatosTablaAError, (state, {error})=> ({
    ...state,
    loading: false,
    error
  }))
)
