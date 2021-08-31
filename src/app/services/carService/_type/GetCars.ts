
export interface Car {
  _typename: "Car";
  id: string;
  name: string;
  dailyPrice: number;
  monthlyPrice: number;
  mileage: string;
  gas: string;
  thumbnailUrl: string;
}

export interface GetCars {
    cars: Car[];
}
