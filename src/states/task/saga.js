import { all, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { tasks } from "./mock";
import { axiosClient, mockAdapter } from "utils/mock";

function* fetchTasks() {
  mockAdapter.onGet("/tasks").reply(200, tasks);

  try {
    const response = yield axiosClient.get("/tasks");
    yield put({
      type: actions.FETCH_TASKS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.FETCH_TASKS_FAILURE });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.FETCH_TASKS, fetchTasks)]);
}
