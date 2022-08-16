import React from "react";
import { StatusBar } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import MainStackNavigator from "./src/navigation/Navigation";
import appReducer from "./src/reducers";

const store = createStore(appReducer, {}, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={"transparent"} />
      <MainStackNavigator />
    </Provider>
  );
};

export default App;
