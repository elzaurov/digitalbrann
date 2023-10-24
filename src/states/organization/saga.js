import { all, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { organizations } from "./mock";
import { axiosClient, mockAdapter } from "utils/mock";

function* fetchOrganizations() {
  mockAdapter.onGet("/organizations").reply(200, organizations);

  try {
    const response = yield axiosClient.get("/organizations");
    yield put({
      type: actions.FETCH_ORGANIZATIONS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.FETCH_ORGANIZATIONS_FAILURE });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.FETCH_ORGANIZATIONS, fetchOrganizations)]);
}
