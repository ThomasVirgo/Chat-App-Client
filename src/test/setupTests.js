import React from "react";

import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { combineReducers } from "redux";
import { default as authReducer} from "../reducers/authReducer"
import { default as searchReducer } from "../reducers/searchReducer"
// const rootReducer = combineReducers({ searchReducer, authReducer })
// import rootReducer from '../reducers';

// import rootReducer from "../reducers";


const TestProvidersAuth = ({ initState }) => {
  initState ||= {
    isLoggedIn: false,
    username: '',
  };

  let testReducer = () => authReducer(initState, { type: "@@INIT" });
  const testStore = createStore(testReducer, applyMiddleware(thunk));

  return ({ children }) => <Provider store={testStore}>{children}</Provider>;
};


const TestProvidersSearch = ({ initState }) => {
  initState ||= {
    searchResultsArray: []
  };
  let testReducer = () => searchReducer(initState, { type: "@@INIT" });

  const testStore = createStore(testReducer, applyMiddleware(thunk));

  return ({ children }) => <Provider store={testStore}>{children}</Provider>;
};


const renderWithReduxProviderSearch = (ui, options = {}) => {
  let TestWrapper = TestProvidersSearch(options);
  render(ui, { wrapper: TestWrapper, ...options });
};


const renderWithReduxProviderAuth = (ui, options = {}) => {
  let TestWrapper = TestProvidersAuth(options);
  render(<TestWrapper> {ui} </TestWrapper>, options );
};

import axios from "axios";
jest.mock("axios");
axios.get.mockResolvedValue({ data: { message: [] } });

global.renderWithReduxProviderAuth = renderWithReduxProviderAuth;
global.renderWithReduxProviderSearch = renderWithReduxProviderSearch;
global.React = React;
global.render = render;
global.userEvent = userEvent;
