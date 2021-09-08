import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import carService from "../../services/carService";
import { Car_Type } from "../../services/carService/_type/GetCars";
import { setTestCart, setTopCars } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { makeSelectTestCart, makeSelectTopCars } from "./selectors";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center 
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: Car_Type[]) => dispatch(setTopCars(cars)),
  setTestCart: (cart: any) => dispatch(setTestCart(cart)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));
const stateSelectorCart = createSelector(makeSelectTestCart, (testCart) => ({
  testCart,
}));


export function TopCars() {

  const [current, setCurrent] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const { setTopCars, setTestCart } = actionDispatch(useDispatch());
  const { topCars } = useSelector(stateSelector);
  const { testCart } = useSelector(stateSelectorCart);

  console.log("-- getting Reducer state value");
  console.log("topCars: ", topCars);
  console.log("testCart: ", testCart);

  const testCar: ICar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gas: "Petrol",
  };
  const testCar2: ICar = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gas: "Petrol",
  };
  const cars = [
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
  ];

  useEffect(() => {
    fetchTopCard();
  }, []);

  const fetchTopCard = async () => {
    try {
      const cars = await carService.getCars();
      console.log("setting Reducer state value");
      if (cars) {
        setTopCars(cars);
        setTestCart(["hello", "martin", 33]);
      }
    } catch (err) {
      throw err;
    }
  };

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
}
