import { ICategory } from '@/types/category.interface'

import { getCategoriesUrl } from '@/config/api.config'

import { request } from './api/request.api'

export const CategoryService = {
	// Получить все категории
	async getAll() {
		return request<ICategory[]>({
			url: getCategoriesUrl(''), // /categories
			method: 'GET'
		})
	},

	// Получить категорию по слагу
	async getBySlug(slug: string) {
		return request<ICategory>({
			url: getCategoriesUrl(`/${slug}`), // /categories/{slug}
			method: 'GET'
		})
	},

	// Создать новую категорию
	async create(category: ICategory) {
		return request<ICategory>({
			url: getCategoriesUrl(''),
			method: 'POST',
			data: category
		})
	},

	// Обновить категорию по слагу
	async update(slug: string, category: ICategory) {
		return request<ICategory>({
			url: getCategoriesUrl(`/${slug}`), // /categories/{slug}
			method: 'PUT',
			data: category
		})
	},

	// Удалить категорию по слагу
	async remove(slug: string) {
		return request<void>({
			url: getCategoriesUrl(`/${slug}`), // /categories/{slug}
			method: 'DELETE'
		})
	}
}
