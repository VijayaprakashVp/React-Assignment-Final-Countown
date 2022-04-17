import { LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } from "./action";

const initState = {
  isAuthenticated: false,
  loading: false,
  error: false,
  token: "",
  username: "",
};

export const Loginreducer = (store = initState, { type, payload }) => {
  // { type, payload } => comes from action action.type, action.payload+

  switch (type) {
    case LOGIN_LOADING:
      return { ...store, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...store,
        isAuthenticated: true,
        token: payload.token,
        username: payload.username,
        loading: false,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        ...store,
        isAuthenticated: false,
        token: "",
        username: "",
        loading: false,
        error: true,
      };
    default:
      return store;
  }
};
