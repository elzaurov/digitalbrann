import actions from "./actions";

const initialState = {
  organizations: [],
  isFetchingOrganizations: false,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_ORGANIZATIONS:
      return {
        ...state,
        isFetchingOrganizations: true,
      };
    case actions.FETCH_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        isFetchingOrganizations: false,
        organizations: action.payload,
      };
    case actions.FETCH_ORGANIZATIONS_FAILURE:
      return { ...state, isFetchingOrganizations: false };

    default:
      return state;
  }
}

export default Reducer;
