import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateMovieDto } from './dto/create-movie.dto'
import { UpdateMovieDto } from './dto/update-movie.dto'

import { Movie } from './entities/movie.entity'
import { Category } from 'src/categories/entities/category.entity'
import { Actor } from 'src/actors/entities/actor.entity'

import { throwIfNotFound, throwIfDuplicate } from 'src/utils/exceptions'
import { slugify } from 'src/utils/slugify'

@Injectable()
export class MoviesService {
	constructor(
		@InjectRepository(Movie)
		private movieRepository: Repository<Movie>,

		@InjectRepository(Category)
		private categoryRepository: Repository<Category>,

		@InjectRepository(Actor)
		private actorRepository: Repository<Actor>
	) {}

	// Создание фильма
	async create(createMovieDto: CreateMovieDto) {
		const { categorySlugs, actorSlugs, ...data } = createMovieDto

		// Генерируем slug перед сохранением
		const slug = slugify(data.name)

		// Проверка на существование фильма с таким slug
		const existingMovie = await this.movieRepository.findOne({ where: { slug } })
		throwIfDuplicate(existingMovie, `Фильм с slug "${slug}" уже существует.`)

		// Поиск категорий по slug
		const categories = categorySlugs
			? await this.categoryRepository.find({ where: categorySlugs.map((slug) => ({ slug })) })
			: []

		// Поиск актёров по slug
		const actors = actorSlugs
			? await this.actorRepository.find({ where: actorSlugs.map((slug) => ({ slug })) })
			: []

		// Создание фильма
		const movie = this.movieRepository.create({
			...data,
			slug,
			categories,
			actors
		})

		return this.movieRepository.save(movie)
	}

	// Получение всех фильмов с категориями и актёрами
	findAll() {
		return this.movieRepository.find({ relations: ['categories', 'actors'] })
	}

	// Получение фильма по slug
	async findOne(slug: string) {
		const movie = await this.movieRepository.findOne({
			where: { slug },
			relations: ['categories', 'actors']
		})
		// Проверка на существование фильма
		throwIfNotFound(movie, `Фильм с slug "${slug}" не найден.`)
		return movie
	}

	// Обновление фильма
	async update(slug: string, updateMovieDto: UpdateMovieDto) {
		// Проверка на существование фильма
		const movie = await this.findOne(slug)

		// Если обновляется slug, проверяем, чтобы не было дубликатов
		if (updateMovieDto.slug && updateMovieDto.slug !== movie.slug) {
			const existingMovie = await this.movieRepository.findOne({
				where: { slug: updateMovieDto.slug }
			})
			throwIfDuplicate(existingMovie, `Фильм с slug "${updateMovieDto.slug}" уже существует.`)
		}

		// Обновление фильма
		await this.movieRepository.update({ slug }, updateMovieDto)
		return this.findOne(slug)
	}

	// Удаление фильма
	async remove(slug: string) {
		const movie = await this.findOne(slug) // Проверка на существование фильма
		return this.movieRepository.delete({ slug })
	}

	async findByCategorySlug(categorySlug: string) {
		const category = await this.categoryRepository.findOne({
			where: { slug: categorySlug },
			relations: ['movies']
		})

		throwIfNotFound(category, `Категория с slug "${categorySlug}" не найдена.`)

		return category.movies
	}
}
