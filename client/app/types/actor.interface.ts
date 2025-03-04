import { IMovie } from './movie.interface'

export interface IActor {
	id: number
	name: string
	slug: string
	photo: string
	bio: string
	movies: IMovie[]
}
