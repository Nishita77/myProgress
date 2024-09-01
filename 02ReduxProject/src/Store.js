// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Reducer'; 

const store = configureStore({
  reducer: counterReducer, 
});

export default store;
