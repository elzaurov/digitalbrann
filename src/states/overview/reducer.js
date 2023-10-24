import actions from "./actions";

const initialState = {
  documents: [],
  isFetchingDocuments: false,

  tasks: [],
  isFetchingTasks: false,

  notifications: [],
  isFetchingNotifications: false,

  news: [],
  isFetchingNews: false,

  deviations: [],
  isFetchingDeviations: false,
};

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_DEVIATIONS:
      return {
        ...state,
        isFetchingDeviations: true,
      };
    case actions.FETCH_DEVIATIONS_SUCCESS:
      return {
        ...state,
        isFetchingDeviations: false,
        deviations: action.payload,
      };
    case actions.FETCH_DEVIATIONS_FAILURE:
      return { ...state, isFetchingDeviations: false };

    case actions.FETCH_NEWS:
      return {
        ...state,
        isFetchingNews: true,
      };
    case actions.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        isFetchingNews: false,
        news: action.payload,
      };
    case actions.FETCH_NEWS_FAILURE:
      return { ...state, isFetchingNews: false };

    case actions.FETCH_NOTIFICATIONS:
      return {
        ...state,
        isFetchingNotifications: true,
      };
    case actions.FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        isFetchingNotifications: false,
        notifications: action.payload,
      };
    case actions.FETCH_NOTIFICATIONS_FAILURE:
      return { ...state, isFetchingNotifications: false };

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

    case actions.FETCH_DOCUMENTS:
      return {
        ...state,
        isFetchingDocuments: true,
      };
    case actions.FETCH_DOCUMENTS_SUCCESS:
      return {
        ...state,
        isFetchingDocuments: false,
        documents: action.payload,
      };
    case actions.FETCH_DOCUMENTS_FAILURE:
      return { ...state, isFetchingDocuments: false };

    default:
      return state;
  }
}

export default Reducer;
