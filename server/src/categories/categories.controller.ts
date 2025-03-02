import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common'
import { CategoriesService } from './categories.service'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'

@Controller('categories')
export class CategoriesController {
	constructor(private readonly categoriesService: CategoriesService) {}

	@Post()
	create(@Body() createCategoryDto: CreateCategoryDto) {
		return this.categoriesService.create(createCategoryDto)
	}

	@Get()
	findAll() {
		return this.categoriesService.findAll()
	}

	@Get(':slug')
	findOne(@Param('slug') slug: string) {
		return this.categoriesService.findOne(slug)
	}

	@Put(':slug')
	update(@Param('slug') slug: string, @Body() updateCategoryDto: UpdateCategoryDto) {
		return this.categoriesService.update(slug, updateCategoryDto)
	}

	@Delete(':slug')
	remove(@Param('slug') slug: string) {
		return this.categoriesService.remove(slug)
	}
}
