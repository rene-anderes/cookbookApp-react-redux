import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: ''
};

const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    setSearchText(state, action) {
      state.text = action.payload;
    }
  }
})

export const { setSearchText } = searchTextSlice.actions;

export default searchTextSlice.reducer;