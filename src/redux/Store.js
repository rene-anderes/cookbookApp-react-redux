
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './AppReducer';

const store = configureStore({
  reducer: appReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;