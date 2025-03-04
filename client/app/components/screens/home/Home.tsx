import React, { FC, useState } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading/Heading'
import MovieCard from '@/components/ui/MovieCard/MovieCard'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import Categories from './Categories/Categories'
import { useMoviesByCategory } from './useMoviesByCategory'

const Home: FC = () => {
	const navigation = useTypedNavigation()
	const [activeCategory, setActiveCategory] = useState('all') // Используем slug "all" для всех фильмов

	// Обработчик выбора категории
	const handleCategoryPress = (categorySlug: string) => {
		setActiveCategory(categorySlug) // Теперь передаём slug
	}

	// Получение фильмов по активной категории (передаём slug)
	const { isLoading, movies } = useMoviesByCategory(activeCategory)

	return (
		<Layout>
			<ScrollView contentContainerStyle={{ padding: 16 }}>
				<Heading text='Категории' />
				<Categories
					activeCategory={activeCategory}
					onCategoryPress={handleCategoryPress}
				/>

				<Heading text='Фильмы' />
				{isLoading ? (
					<ActivityIndicator size='large' color='#0000ff' />
				) : (
					movies?.map(movie => (
						<MovieCard key={movie.id} movie={movie} />
					))
				)}
			</ScrollView>
		</Layout>
	)
}

export default Home
