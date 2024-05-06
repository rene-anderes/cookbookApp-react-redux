
import { configureStore } from '@reduxjs/toolkit';
import recipeListReducer from './recipeListSlice';
import recipeReducer from "./recipeSlice";

const store = configureStore({
  reducer: { 
    recipeList: recipeListReducer, 
    recipe: recipeReducer
  }, 
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;