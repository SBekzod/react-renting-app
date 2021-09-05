import { createSelector } from "reselect";
import { IRootAppState } from "../../../typings/topCar";

const selectHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectTopCars = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topCars
);
