import { apolloClient } from "../../graphql";
import { GET_ALL_CARS } from "./queries";
import { Car_Type } from "./_type/GetCars";

class CarService {
  public async getCars(): Promise<Car_Type[]> {
    console.log("GraphQL request started");
    const response = await apolloClient
      .query({ query: GET_ALL_CARS })
      .catch((err) => {
        throw err;
      });
    console.log("GraphQL full response::", response);

    if (response && response.data && response.data.cars) {
      return response.data.cars as Car_Type[];
    }

    return [];
  }
}

export default new CarService();
