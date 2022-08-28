/**
 * @format
 */
 import { PersistGate } from 'redux-persist/integration/react';
 import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import createStore from "./Redux/Task/task.store"
// import store from './Redux/Task/task.store';
// const initialState = {}

// const { store, persistor } = createStore(initialState)

// Setup react-redux so that connect HOC can be used
const initialState={}
const {store,persistor}=createStore(initialState)
const AppNative = () => (
    <Provider store={store}>
    <PersistGate  persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppNative);
