import {createStore, combineReducers} from 'redux';
import TaskReducer from './task.reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";

// import storage from 'redux-persist/lib/storage';
const config = {
  key: 'root',
  storage:AsyncStorage,
};

const rootReducer = combineReducers({
  task: TaskReducer,
});

export default () => {
  const peristedReducer = persistReducer(config, rootReducer);
  const store = createStore(peristedReducer);

  const persistor = persistStore(store);

  return {store, persistor};
};
