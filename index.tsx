import React from 'react';
import {AppRegistry} from 'react-native';
import Routes from './src/routes';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import store from './src/store';

import {enableES5} from 'immer';

import 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      {enableES5()}
      <Routes />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => App);
