import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers'

// import authReducer from "./reducers/authReducer";
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
