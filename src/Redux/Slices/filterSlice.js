import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortType: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    //! 2 type of functions used
    //? the First One
    changeCategoryState: (state, action) => {
      state.categoryId = action.payload;
    },
    //? The Second One
    setSortTypePick(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
    },
  },
});

export const { changeCategoryState, setSortTypePick, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
