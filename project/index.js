/** @format */

import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducer/index';
import App from './App';
import {name as appName} from './app.json';

const store = createStore(rootReducer);
export default store;

const gameApp = () => {
  return (
      <Provider store={store}>
        <App />
      </Provider>
  )
};

AppRegistry.registerComponent(appName, () => gameApp);
// AppRegistry.registerComponent(appName, () => App);
