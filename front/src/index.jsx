import React from "react";
import ReactDOM from "react-dom/client"; //react18부터 변경 (react-dom => react-dom/client)
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import PromiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducer";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

const createStoreWithMiddleware = applyMiddleware(
  PromiseMiddleware,
  ReduxThunk
)(createStore);

const rootNode = document.getElementById("root"); //react18부터 변경 (rootNode가 ReactDOM과 render 사이로)

ReactDOM.createRoot(rootNode).render(
  //react18부터 변경
  <ChakraProvider>
    <Provider
      store={createStoreWithMiddleware(
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
);
