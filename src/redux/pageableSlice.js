import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [{
        totalPages: 0,
        pageNumber: 1,
        pageSize: 12,
        offset: 0,
        last: true,
        first: true  
      }]
};

const pageableSlice = createSlice({
  name: 'pageable',
  initialState,
  reducers: {
    setPageable(state, action) {
        state.data = action.payload;
    },
  },
});

export const { setPageable } = pageableSlice.actions;

export default pageableSlice.reducer;