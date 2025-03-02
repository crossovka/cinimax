import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ActorsService } from './actors.service'
import { ActorsController } from './actors.controller'

import { Actor } from './entities/actor.entity'
import { Movie } from 'src/movies/entities/movie.entity'

@Module({
	imports: [TypeOrmModule.forFeature([Actor, Movie])],
	controllers: [ActorsController],
	providers: [ActorsService],
	exports: [ActorsService]
})
export class ActorsModule {}
