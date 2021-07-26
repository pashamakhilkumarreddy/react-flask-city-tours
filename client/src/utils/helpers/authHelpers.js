import { clone } from "ramda";

export const authReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      const emailState = clone({
        ...state,
        email: action.payload,
      });
      return emailState;
    case "PASSWORD":
      const passwordState = clone({
        ...state,
        password: action.payload,
      });
      return passwordState;
    default:
      return state;
  }
};
