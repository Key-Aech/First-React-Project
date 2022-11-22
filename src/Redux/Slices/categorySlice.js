import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortType: 'rating',
  },
};

const categorySlice = createSlice({
  name: 'category',
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
  },
});

export const { changeCategoryState, setSortTypePick } = categorySlice.actions;

export default categorySlice.reducer;
