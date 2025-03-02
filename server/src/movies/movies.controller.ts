import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common'
import { MoviesService } from './movies.service'
import { CreateMovieDto } from './dto/create-movie.dto'
import { UpdateMovieDto } from './dto/update-movie.dto'

@Controller('movies')
export class MoviesController {
	constructor(private readonly moviesService: MoviesService) {}

	@Post()
	create(@Body() createMovieDto: CreateMovieDto) {
		return this.moviesService.create(createMovieDto)
	}

	@Get()
	findAll() {
		return this.moviesService.findAll()
	}

	@Get(':slug')
	findOne(@Param('slug') slug: string) {
		return this.moviesService.findOne(slug)
	}

	@Put(':slug')
	update(@Param('slug') slug: string, @Body() updateMovieDto: UpdateMovieDto) {
		return this.moviesService.update(slug, updateMovieDto)
	}

	@Delete(':slug')
	remove(@Param('slug') slug: string) {
		return this.moviesService.remove(slug)
	}
}
