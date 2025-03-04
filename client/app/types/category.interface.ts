import { IMovie } from './movie.interface'

export interface ICategory {
	id: number
	name: string
	slug: string
	description: string
	cover: string
	movies: IMovie[]
}
