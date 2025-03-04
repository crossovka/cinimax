import { useQuery } from '@tanstack/react-query'

import { IMovie } from '@/types/movie.interface'

import { MovieService } from '@/services/movie.service'

export const useMovieDetails = (slug: string) => {
	const { isLoading, data: movie } = useQuery<IMovie>({
		queryKey: ['movie details', slug],
		queryFn: () => MovieService.getBySlug(slug)
	})

	return { isLoading, movie }
}
