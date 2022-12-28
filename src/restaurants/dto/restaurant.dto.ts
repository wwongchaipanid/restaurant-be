export class RestaurantDto {
    locationName?: string;
    restaurantList: Array<RestaurantDetailsDto>
}

export class RestaurantDetailsDto {
    name?: string;
    lat?: number;
    lng?: number;
    rating?: number;
}