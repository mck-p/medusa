import React from "react";
import Render from "./Render";
import createStore from "./store";
import Provider from "./store/provider";

import "./App.css";

const store = createStore(
  typeof window !== "undefined" ? (window as any).__PRELOADED_STATE__ : {}
);

const App = () => (
  <Provider store={store}>
    <Render />
  </Provider>
);

export default App;
