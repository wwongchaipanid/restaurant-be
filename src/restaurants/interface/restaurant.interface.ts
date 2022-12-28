export interface RestaurantResponse {
    locationNam?: string;
    restaurantList: Array<RestaurantDetails>
}

export class RestaurantDetails {
    name?: string;
    lat?: number;
    lng?: number;
    rating?: number;
}

