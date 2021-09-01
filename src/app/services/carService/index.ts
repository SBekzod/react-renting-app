import { apolloClient } from "../../graphql";
import { GET_ALL_CARS } from "./queries";
import { Car } from "./_type/GetCars";

class CarService {

    public async getCars(): Promise<Car[]> {
        console.log('PASSED HERE');
        const response = await apolloClient.query({query: GET_ALL_CARS}).catch(err => {
            throw err;
        });
        console.log('response::', response);

        if(response && response.data) {
            return response.data as Car[]; 
        }

        return [];
    }


}

export default new CarService();