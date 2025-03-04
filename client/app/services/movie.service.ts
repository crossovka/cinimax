import { IMovie } from '@/types/movie.interface'

import { getMoviesUrl } from '@/config/api.config'

import { request } from './api/request.api'

export const MovieService = {
	// Получить все фильмы
	async getAll() {
		return request<IMovie[]>({
			url: getMoviesUrl(''), // /movies
			method: 'GET'
		})
	},

	// Получить фильм по слагу
	async getBySlug(slug: string) {
		return request<IMovie>({
			url: getMoviesUrl(`/${slug}`), // /movies/{slug}
			method: 'GET'
		})
	},

	// Создать новый фильм
	async create(movie: IMovie) {
		return request<IMovie>({
			url: getMoviesUrl(''),
			method: 'POST',
			data: movie
		})
	},

	// Обновить фильм по слагу
	async update(slug: string, movie: IMovie) {
		return request<IMovie>({
			url: getMoviesUrl(`/${slug}`), // /movies/{slug}
			method: 'PUT',
			data: movie
		})
	},

	// Удалить фильм по слагу
	async remove(slug: string) {
		return request<void>({
			url: getMoviesUrl(`/${slug}`), // /movies/{slug}
			method: 'DELETE'
		})
	},

	// Получить фильмы по слагу категории
	async getByCategorySlug(categorySlug: string) {
		return request<IMovie[]>({
			url: getMoviesUrl(`/category/${categorySlug}`), // /movies/category/{categorySlug}
			method: 'GET'
		})
	}
}
