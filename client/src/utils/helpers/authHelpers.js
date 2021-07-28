import { clone } from 'ramda';

// prettier-ignore
export const authReducer = (state, action) => { // eslint-disable-line import/prefer-default-export
  switch (action.type) {
    case 'EMAIL': {
      const updatedState = clone({
        ...state,
        email: action.payload,
      });
      return updatedState;
    }
    case 'PASSWORD': {
      const updatedState = clone({
        ...state,
        password: action.payload,
      });
      return updatedState;
    }
    default:
      return state;
  }
};
