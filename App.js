import React from "react";
import { LogBox, StatusBar } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import MainStackNavigator from "./src/navigation/Navigation";
import appReducer from "./src/reducers";
import { colors } from "./src/helper/utils";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

const store = createStore(appReducer, {}, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.primary} />
      <MainStackNavigator />
    </Provider>
  );
};

export default App;
