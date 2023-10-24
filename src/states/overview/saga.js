import { all, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { documents, tasks, notifications, news, deviations } from "./mock";
import { axiosClient, mockAdapter } from "utils/mock";

function* fetchDocuments() {
  mockAdapter.onGet("/documents").reply(200, documents);

  try {
    const response = yield axiosClient.get("/documents");
    yield put({
      type: actions.FETCH_DOCUMENTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    yield put({ type: actions.FETCH_DOCUMENTS_FAILURE });
  }
}

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

function* fetchNotifications() {
  mockAdapter.onGet("/notifications").reply(200, notifications);

  try {
    const response = yield axiosClient.get("/notifications");
    yield put({
      type: actions.FETCH_NOTIFICATIONS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.FETCH_NOTIFICATIONS_FAILURE });
  }
}

function* fetchNews() {
  mockAdapter.onGet("/news").reply(200, news);

  try {
    const response = yield axiosClient.get("/news");
    yield put({
      type: actions.FETCH_NEWS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.FETCH_NEWS_FAILURE });
  }
}

function* fetchDeviations() {
  mockAdapter.onGet("/deviations").reply(200, deviations);

  try {
    const response = yield axiosClient.get("/deviations");
    yield put({
      type: actions.FETCH_DEVIATIONS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.FETCH_DEVIATIONS_FAILURE });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.FETCH_DOCUMENTS, fetchDocuments)]);
  yield all([takeLatest(actions.FETCH_TASKS, fetchTasks)]);
  yield all([takeLatest(actions.FETCH_NOTIFICATIONS, fetchNotifications)]);
  yield all([takeLatest(actions.FETCH_NEWS, fetchNews)]);
  yield all([takeLatest(actions.FETCH_DEVIATIONS, fetchDeviations)]);
}
