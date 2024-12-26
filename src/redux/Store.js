
import { configureStore } from '@reduxjs/toolkit';
import recipeListReducer from './recipeListSlice';
import recipeReducer from "./recipeSlice";
import searchResultReducer from './searchResultSlice';

const store = configureStore({
  reducer: { 
    recipeList: recipeListReducer, 
    recipe: recipeReducer,
    searchResult: searchResultReducer
  }, 
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;