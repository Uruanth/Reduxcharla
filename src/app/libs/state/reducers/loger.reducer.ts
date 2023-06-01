import * as modelos from '../../models/state/index'
import * as acciones from '../actions/index'
import {createReducer, on} from "@ngrx/store";

const initialState: modelos.LogerModel = {
  isLoged: false
}


export const LogerReducer = createReducer(
  initialState,
  on(acciones.isLoged, state => ({...state, isLoged: true}))
);
