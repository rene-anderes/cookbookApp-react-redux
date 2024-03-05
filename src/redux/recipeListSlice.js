import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [{}],
  pageable: [{
    totalPages: 0,
    pageNumber: 1,
    pageSize: 12,
    offset: 0,
    last: true,
    first: true  
  }]
};

const recipeListSlice = createSlice({
  name: 'recipieList',
  initialState,
  reducers: {
    setCollection(state, action) {
        state.data = action.payload.content;
        state.pageable = getPageable(action.payload);
    },
  },
});

export const { setCollection } = recipeListSlice.actions;

export default recipeListSlice.reducer;

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