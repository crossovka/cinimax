import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'

import { Category } from './entities/category.entity'

import { slugify } from '../utils/slugify' // Функция для генерации слага
import { throwIfNotFound, throwIfDuplicate } from 'src/utils/exceptions' // Импорт проверок

@Injectable()
export class CategoriesService {
	constructor(
		@InjectRepository(Category)
		private categoryRepository: Repository<Category>
	) {}

	async create(createCategoryDto: CreateCategoryDto) {
		// Проверка на существование категории с таким же названием
		const existingCategory = await this.categoryRepository.findOne({
			where: { name: createCategoryDto.name }
		})
		throwIfDuplicate(
			existingCategory,
			`Категория с именем "${createCategoryDto.name}" уже существует.`
		)

		// Генерация slug и создание категории
		const category = this.categoryRepository.create({
			...createCategoryDto,
			slug: slugify(createCategoryDto.name)
		})

		return this.categoryRepository.save(category)
	}

	findAll() {
		return this.categoryRepository.find()
	}

	async findOne(slug: string) {
		const category = await this.categoryRepository.findOneBy({ slug })
		// Проверка на существование категории
		throwIfNotFound(category, `Категория с slug "${slug}" не найдена.`)
		return category
	}

	async update(slug: string, updateCategoryDto: UpdateCategoryDto) {
		// Проверка на существование категории
		const category = await this.findOne(slug)

		// Если обновляется название категории, проверяем, чтобы не было дубликатов
		if (updateCategoryDto.name && updateCategoryDto.name !== category.name) {
			const existingCategory = await this.categoryRepository.findOne({
				where: { name: updateCategoryDto.name }
			})
			throwIfDuplicate(
				existingCategory,
				`Категория с именем "${updateCategoryDto.name}" уже существует.`
			)
		}

		// Обновление категории
		await this.categoryRepository.update({ slug }, updateCategoryDto)
		return this.findOne(slug)
	}

	async remove(slug: string) {
		const category = await this.findOne(slug) // Проверка на существование категории
		return this.categoryRepository.delete({ slug })
	}
}
