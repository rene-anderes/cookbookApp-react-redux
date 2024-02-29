
import { configureStore } from '@reduxjs/toolkit';
import recipeListReducer from './recipeListSlice';
import recipeReducer from "./recipeSlice";
import pageableReducer from './pageableSlice';

const store = configureStore({
  reducer: { recipeList: recipeListReducer, recipe: recipeReducer, pageable: pageableReducer }, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;