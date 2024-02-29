import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [{}]
};

const recipeListSlice = createSlice({
  name: 'recipieList',
  initialState,
  reducers: {
    setCollection(state, action) {
        state.data = action.payload;
    },
  },
});

export const { setCollection } = recipeListSlice.actions;

export default recipeListSlice.reducer;
