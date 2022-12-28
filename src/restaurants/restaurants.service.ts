import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager'
import { RestaurantDto } from './dto/restaurant.dto';
import { RestaurantResponse } from './interface/restaurant.interface';

@Injectable()
export class RestaurantsService {

    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
 
    async createCache(restaurantDto: RestaurantDto) {
        //Convert structure to string
        let json = JSON.stringify(restaurantDto)

        //Set json string to cache
        await this.cacheManager.set(restaurantDto.locationName, json, 60*60*1000);
    }

    async findCache(locationName: string): Promise<RestaurantResponse> {
        //Get cache by location name
        let json = await this.cacheManager.get<string>(locationName);
        if (!json) {
            return
        }
        
        //Convert json string to structure
        let obj: RestaurantResponse = JSON.parse(json)

        //Return response
        return  obj
    }
}
