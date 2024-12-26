
import { configureStore } from '@reduxjs/toolkit';
import recipeListReducer from './recipeListSlice';
import recipeReducer from "./recipeSlice";
import searchResultReducer from './searchResultSlice';
import searchTextReducer from './searchTextSlice';

const store = configureStore({
  reducer: { 
    recipeList: recipeListReducer, 
    recipe: recipeReducer,
    searchResult: searchResultReducer,
    searchText: searchTextReducer
  }, 
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;