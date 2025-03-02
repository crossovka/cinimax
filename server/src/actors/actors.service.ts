import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateActorDto } from './dto/create-actor.dto'
import { UpdateActorDto } from './dto/update-actor.dto'

import { Actor } from './entities/actor.entity'
import { Movie } from 'src/movies/entities/movie.entity'

import { throwIfNotFound, throwIfDuplicate } from 'src/utils/exceptions'

@Injectable()
export class ActorsService {
	constructor(
		@InjectRepository(Actor)
		private actorRepository: Repository<Actor>,

		@InjectRepository(Movie)
		private movieRepository: Repository<Movie>
	) {}

	async create(createActorDto: CreateActorDto) {
		const { movieSlugs, ...data } = createActorDto

		// Проверяем, существует ли актёр с таким именем
		const existingActor = await this.actorRepository.findOne({ where: { name: data.name } })
		throwIfDuplicate(existingActor, `Актёр с именем "${data.name}" уже существует.`)

		// Ищем фильмы по slug
		const movies = movieSlugs
			? await this.movieRepository.find({ where: movieSlugs.map((slug) => ({ slug })) })
			: []

		// Создаём актёра
		const actor = this.actorRepository.create({ ...data, movies })
		return this.actorRepository.save(actor)
	}

	async findAll() {
		return this.actorRepository.find({ relations: ['movies'] })
	}

	async findOne(slug: string) {
		const actor = await this.actorRepository.findOne({
			where: { slug },
			relations: ['movies']
		})
		throwIfNotFound(actor, `Актёр с slug "${slug}" не найден.`)
		return actor
	}

	async update(slug: string, updateActorDto: UpdateActorDto) {
		// Проверяем, существует ли актёр
		const actor = await this.findOne(slug)

		// Проверяем дубликат по новому имени (если изменяется имя)
		if (updateActorDto.name && updateActorDto.name !== actor.name) {
			const existingActor = await this.actorRepository.findOne({
				where: { name: updateActorDto.name }
			})
			throwIfDuplicate(existingActor, `Актёр с именем "${updateActorDto.name}" уже существует.`)
		}

		// Обновляем
		await this.actorRepository.update({ slug }, updateActorDto)
		return this.findOne(slug)
	}

	async remove(slug: string) {
		const actor = await this.findOne(slug) // Проверяем, существует ли актёр
		return this.actorRepository.delete({ slug })
	}
}
