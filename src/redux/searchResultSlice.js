import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText: '',
    data: [{}],
    pageable: [{
    totalPages: 0,
    pageNumber: 1,
    pageSize: 100,
    offset: 0,
    last: true,
    first: true  
  }]
};

const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    setSearchResult(state, action) {
        state.data = action.payload.searchResult.content;
        state.pageable = getPageable(action.payload.searchResult);
        state.searchText = action.payload.searchText;
    },
  },
});

export const { setSearchResult } = searchResultSlice.actions;

export default searchResultSlice.reducer;

function getPageable(data) {
  const pageable = {};
  pageable.totalPages = data.totalPages;
  pageable.pageNumber = data.number;
  pageable.pageSize = data.size;
  pageable.offset = data.offset;
  pageable.last = data.last;
  pageable.first = data.first;
  return pageable;
}