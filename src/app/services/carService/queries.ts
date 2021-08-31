import { gql } from "graphql-tag";

export const GET_ALL_CARS = gql`
query GetCars {
    cars {
        id
        name 
        milage
        gearType
        gas 
        thumbnailUrl
        dailyPrice
    }
}
`;