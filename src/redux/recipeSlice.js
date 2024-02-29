import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [{}],
  ingredients: [{}]
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipe(state, action) {
        state.data = action.payload;
    },
    setIngredients(state, action) {
        state.ingredients = action.payload;
    },
  },
});

export const { setRecipe, setIngredients } = recipeSlice.actions;

export default recipeSlice.reducer;