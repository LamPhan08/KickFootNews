import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import feedReducer from './reducers';

const rootReducer = combineReducers({
  feedReducer: feedReducer,
});

export var store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

