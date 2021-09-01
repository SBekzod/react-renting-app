import { gql } from "graphql-tag";

export const GET_ALL_CARS = gql`
query {
    cars {
        id
        name 
        mileage
        gas 
        thumbnailUrl
        dailyPrice
    }
}
`;