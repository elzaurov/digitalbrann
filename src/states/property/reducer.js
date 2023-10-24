import actions from "./actions";

const initialState = {
  properties: [],
  isFetchingProperties: false,

  property: null,
  isFetchingProperty: false,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_PROPERTIES:
      return {
        ...state,
        isFetchingProperties: true,
      };
    case actions.FETCH_PROPERTIES_SUCCESS:
      return {
        ...state,
        isFetchingProperties: false,
        properties: action.payload,
      };
    case actions.FETCH_PROPERTIES_FAILURE:
      return { ...state, isFetchingProperties: false };

    case actions.FETCH_PROPERTY:
      return {
        ...state,
        isFetchingProperty: true,
      };
    case actions.FETCH_PROPERTY_SUCCESS:
      return {
        ...state,
        isFetchingProperty: false,
        property: action.payload,
      };
    case actions.FETCH_PROPERTY_FAILURE:
      return { ...state, isFetchingProperty: false };

    default:
      return state;
  }
}

export default Reducer;
