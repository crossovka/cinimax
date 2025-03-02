import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { MoviesService } from './movies.service'
import { MoviesController } from './movies.controller'

import { Movie } from './entities/movie.entity'
import { Category } from 'src/categories/entities/category.entity'
import { Actor } from 'src/actors/entities/actor.entity'

@Module({
	imports: [TypeOrmModule.forFeature([Movie, Category, Actor])],
	controllers: [MoviesController],
	providers: [MoviesService]
})
export class MoviesModule {}
