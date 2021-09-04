import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import locationReducer from "./reducers/locationReducer";
// const store = createStore(locationReducer, composeWithDevTools(applyMiddleware(thunk)));

// export default store;