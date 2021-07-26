import { clone } from "ramda";
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../constants";

const initialState = {
  isLoggedIn: false,
  tokens: {},
  user: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      const registerState = clone({
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        tokens: action.payload.tokens,
      });
      return registerState;
    case LOGIN_USER:
      const loginState = clone({
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        tokens: action.payload.tokens,
      });
      return loginState;
    case LOGOUT_USER:
      const logoutState = clone({
        ...initialState,
      });
      return logoutState;
    default:
      return state;
  }
}
