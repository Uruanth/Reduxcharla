import * as userRed from './usuario.reducer';

describe('Usuario reducer', () => {
  const {initialState} = userRed;

  it('should return initialState', ()=>{
    const action = {
      type: 'unknow'
    };
    const state = userRed.usuarioReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should return usuario logeado', ()=>{
    const usuario = {
      nombre: 'string',
      dni: 'string',
      permission: [],
      rol: 'string'
    }
    const action = {
      type:'[LOGIN] -> Logeo exitoso',
      usuario
    };
    const state = userRed.usuarioReducer(initialState, action);
    expect(state).toEqual({
      nombre: usuario.nombre,
      permisos: usuario.permission,
      id: usuario.dni,
      loading: false,
      error: undefined
    });
  });

});
