import actions from "./actions";

const initialState = {
  tasks: [],
  isFetchingTasks: false,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_TASKS:
      return {
        ...state,
        isFetchingTasks: true,
      };
    case actions.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        isFetchingTasks: false,
        tasks: action.payload,
      };
    case actions.FETCH_TASKS_FAILURE:
      return { ...state, isFetchingTasks: false };

    default:
      return state;
  }
}

export default Reducer;
