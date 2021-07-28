import { clone } from 'ramda';
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../constants';

const initialState = {
  isLoggedIn: false,
  tokens: {},
  user: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER: {
      const updatedState = clone({
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        tokens: action.payload.tokens,
      });
      return updatedState;
    }
    case LOGIN_USER: {
      const updatedState = clone({
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        tokens: action.payload.tokens,
      });
      return updatedState;
    }
    case LOGOUT_USER: {
      const updatedState = clone({
        ...initialState,
      });
      return updatedState;
    }
    default: {
      return state;
    }
  }
}
