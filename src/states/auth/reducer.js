import actions from "./actions";

const initialState = {
  isAuthenticated: false,
  user: null,
  isAuthenticating: false,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isAuthenticating: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        user: action.payload,
      };
    case actions.LOGIN_FAILURE:
      return { ...state, isAuthenticated: false, isAuthenticating: false };

    case actions.LOGOUT:
      return {
        ...state,
      };
    case actions.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case actions.LOGOUT_FAILURE:
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
}

export default Reducer;
