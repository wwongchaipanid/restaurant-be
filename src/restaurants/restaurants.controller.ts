import { Body, CacheInterceptor, CacheTTL, Controller, Get, HttpException, HttpStatus, InternalServerErrorException, Param, Post, UseInterceptors } from '@nestjs/common';
import { get } from 'http';
import { RestaurantDto } from './dto/restaurant.dto';
import { RestaurantResponse } from './interface/restaurant.interface';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {

    constructor(private restaurantsService: RestaurantsService) {}

    @Post()
    async createCache(@Body() restaurantDto: RestaurantDto) {
        try {
            await this.restaurantsService.createCache(restaurantDto)
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }

    @Get("/:locationName")
    async findCache(@Param() params): Promise<RestaurantResponse> {
        try {
            return await this.restaurantsService.findCache(params.locationName)
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}
