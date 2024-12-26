import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText: '',
    data: [{}]
};

const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    setSearchResult(state, action) {
        state.data = action.payload.searchResult.content;
        state.searchText = action.payload.searchText;
    },
  },
});

export const { setSearchResult } = searchResultSlice.actions;

export default searchResultSlice.reducer;
