import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    deleteFavourite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavourite = favouritesSlice.actions.addFavourite;
export const deleteFavourite = favouritesSlice.actions.deleteFavourite;
export default favouritesSlice.reducer;
