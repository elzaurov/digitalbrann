import { all } from "redux-saga/effects";
import authSaga from "states/auth/saga";
import customerSaga from "states/customer/saga";
import organizationSaga from "states/organization/saga";
import overviewSaga from "states/overview/saga";
import propertySaga from "states/property/saga";
import taskSaga from "states/task/saga";

// Here you can include all the saga which you write for components
export default function* rootSaga() {
  yield all([
    authSaga(),
    customerSaga(),
    organizationSaga(),
    overviewSaga(),
    propertySaga(),
    taskSaga(),
  ]);
}
