import { all, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { properties } from "./mock";
import { axiosClient, mockAdapter } from "utils/mock";

function* fetchProperties() {
  mockAdapter.onGet("/properties").reply(200, properties);

  try {
    const response = yield axiosClient.get("/properties");
    yield put({
      type: actions.FETCH_PROPERTIES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.FETCH_PROPERTIES_FAILURE });
  }
}

function* fetchProperty(action) {
  const obsProperty = properties.find(
    (property) => property.id === parseInt(action.payload.id)
  );
  mockAdapter.onGet(`/property/${action.payload.id}`).reply(200, obsProperty);

  try {
    const response = yield axiosClient.get(`/property/${action.payload.id}`);
    yield put({
      type: actions.FETCH_PROPERTY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.FETCH_PROPERTY_FAILURE });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.FETCH_PROPERTIES, fetchProperties)]);
  yield all([takeLatest(actions.FETCH_PROPERTY, fetchProperty)]);
}
