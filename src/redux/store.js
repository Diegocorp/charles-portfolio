import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { appsDetailReducer, appsListReducer } from "./reducers/appsReducers";
import {
  designsDetailReducer,
  designsListReducer,
} from "./reducers/designReducer";
import {
  websitesDetailReducer,
  websitesListReducer,
} from "./reducers/websitesReducer";

const initialState = {};
const reducer = combineReducers({
  appLists: appsListReducer,
  appDetails: appsDetailReducer,
  websiteList: websitesListReducer,
  websiteDetails: websitesDetailReducer,
  designsList: designsListReducer,
  designsDetails: designsDetailReducer,
});

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhance(applyMiddleware(thunk))
);

export default store;
