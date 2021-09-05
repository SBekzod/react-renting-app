export interface Car_Type {
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
  cars: Car_Type[];
}
