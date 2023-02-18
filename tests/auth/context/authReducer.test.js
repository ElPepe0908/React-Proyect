import { screen } from "@testing-library/react";
import { authReducer, types } from "../../../src/auth";

describe(" Pruebas en authReducer", () => {
  test("debe de retornar el estado por defecto", () => {
    const state = authReducer({ logged: false, user: null }, {});
    expect(state).toEqual({ logged: false, user: null });
  });

  test("debe de (login) llamar el login autenticar y establecer el user", () => {
    const action = {
      type: types.login,
      payload: {
        name: "ElPepo",
        id: "1243",
      },
    };

    const state = authReducer({ logged: false, user: null }, action);

    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });

  test("debe de (logout) borrar el name del usuario y logged en false", () => {
    const state = { logged: true, user: { id: "123", name: "ElPepo" } };

    const action = {
      type: types.logout,
    };

    const newState = authReducer(state, action);

    expect(newState).toEqual({ logged: false });
  });
});
