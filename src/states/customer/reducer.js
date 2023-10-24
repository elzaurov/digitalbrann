import actions from "./actions";

const initialState = {
  customers: [],
  isFetchingCustomers: false,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_CUSTOMERS:
      return {
        ...state,
        isFetchingCustomers: true,
      };
    case actions.FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        isFetchingCustomers: false,
        customers: action.payload,
      };
    case actions.FETCH_CUSTOMERS_FAILURE:
      return { ...state, isFetchingCustomers: false };

    default:
      return state;
  }
}

export default Reducer;
