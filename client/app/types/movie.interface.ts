import { IActor } from './actor.interface'
import { ICategory } from './category.interface'

export interface IMovie {
	id: number
	name: string
	slug: string
	releaseDate: Date
	likes: number
	views: number
	videoUrl: string
	cover: string
	description: string
	categories: ICategory[]
	actors: IActor[]
}
