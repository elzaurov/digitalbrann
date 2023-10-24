import { all, put, takeLatest } from "redux-saga/effects";
import actions from "./actions";
import { notification } from "antd";
import { customer, admin } from "./mock";
import { axiosClient, mockAdapter } from "utils/mock";

function* login(action) {
  const { email, password } = action.payload;
  const isCustomer = email === customer.email && password === customer.password;
  const isAdmin = email === admin.email && password === admin.password;

  if (!isCustomer && !isAdmin) {
    mockAdapter.onPost("/login").reply(400, {});
  } else {
    mockAdapter.onPost("/login").reply(200, isCustomer ? customer : admin);
  }

  try {
    const response = yield axiosClient.post("/login", action.payload);
    yield put({
      type: actions.LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({ type: actions.LOGIN_FAILURE });
    notification.error({
      duration: 8,
      message: "Innlogging mislykket",
      description: "Ugyldig e-post eller passord",
    });
  }
}

function* logout() {
  mockAdapter.onDelete("/logout").reply(200);

  try {
    yield axiosClient.post("/logout");
    yield put({ type: actions.LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: actions.LOGOUT_FAILURE });
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actions.LOGIN, login)]);
  yield all([takeLatest(actions.LOGOUT, logout)]);
}
