import { all, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { customers } from "./mock";
import { axiosClient, mockAdapter } from "utils/mock";

function* fetchCustomers() {
  mockAdapter.onGet("/customers").reply(200, customers);

  try {
    const response = yield axiosClient.get("/customers");
    yield put({
      type: actions.FETCH_CUSTOMERS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.FETCH_CUSTOMERS_FAILURE });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.FETCH_CUSTOMERS, fetchCustomers)]);
}
