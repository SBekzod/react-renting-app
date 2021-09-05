import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "../../../typings/type";

const initialState: IHomePageState = {
  topCars: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topCars = action.payload;
    },
  },
});

export const { setTopCars } = homePageSlice.actions;
export default homePageSlice.reducer;
