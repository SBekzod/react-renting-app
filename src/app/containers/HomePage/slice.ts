import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "../../../typings/type";

const initialState: IHomePageState = {
  topCars: [],
  testCart: []
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topCars = action.payload;
    },
    setTestCart: (state, action) => {
      state.testCart = action.payload;
    },
  },
});

export const { setTopCars, setTestCart } = homePageSlice.actions;
export default homePageSlice.reducer;
