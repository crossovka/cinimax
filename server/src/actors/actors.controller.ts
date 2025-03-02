import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common'
import { ActorsService } from './actors.service'
import { CreateActorDto } from './dto/create-actor.dto'
import { UpdateActorDto } from './dto/update-actor.dto'

@Controller('actors')
export class ActorsController {
	constructor(private readonly actorsService: ActorsService) {}

	@Post()
	create(@Body() createActorDto: CreateActorDto) {
		return this.actorsService.create(createActorDto)
	}

	@Get()
	findAll() {
		return this.actorsService.findAll()
	}

	@Get(':slug')
	findOne(@Param('slug') slug: string) {
		return this.actorsService.findOne(slug)
	}

	@Put(':slug')
	update(@Param('slug') slug: string, @Body() updateActorDto: UpdateActorDto) {
		return this.actorsService.update(slug, updateActorDto)
	}

	@Delete(':slug')
	remove(@Param('slug') slug: string) {
		return this.actorsService.remove(slug)
	}
}
