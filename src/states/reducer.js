import { combineReducers } from "redux";
import authenticateReducer from "states/auth/reducer";
import customerReducer from "states/customer/reducer";
import organizationReducer from "states/organization/reducer";
import overviewReducer from "states/overview/reducer";
import propertyReducer from "states/property/reducer";
import taskReducer from "states/task/reducer";

const rootReducer = combineReducers({
  auth: authenticateReducer,
  customer: customerReducer,
  organization: organizationReducer,
  overview: overviewReducer,
  property: propertyReducer,
  task: taskReducer,
});

export default rootReducer;
