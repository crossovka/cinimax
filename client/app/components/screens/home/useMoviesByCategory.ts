import { useQuery } from '@tanstack/react-query'

import { IMovie } from '@/types/movie.interface'

import { MovieService } from '@/services/movie.service'

export const useMoviesByCategory = (categorySlug: string) => {
	const queryKey =
		categorySlug === 'all'
			? ['get all movies']
			: ['movies by category', categorySlug]

	const queryFn = () =>
		categorySlug === 'all'
			? MovieService.getAll()
			: MovieService.getByCategorySlug(categorySlug)

	const { isLoading, data: movies } = useQuery<IMovie[]>({
		queryKey,
		queryFn
	})

	return { isLoading, movies }
}
