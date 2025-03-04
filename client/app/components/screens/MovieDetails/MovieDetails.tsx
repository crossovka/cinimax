import React, { FC } from 'react'
import { Image, ScrollView, Text, View, ActivityIndicator } from 'react-native'

import Layout from '@/components/layout/Layout'
import { useRoute } from '@react-navigation/native'

import { useMovieDetails } from './useMovieDetails'

const MovieDetails: FC = () => {
	const route = useRoute()
	const { slug } = route.params as { slug: string }

	const { isLoading, movie } = useMovieDetails(slug)

	if (isLoading) {
		return (
			<Layout>
				<ActivityIndicator size="large" color="#0000ff" />
			</Layout>
		)
	}

	if (!movie) {
		return (
			<Layout>
				<Text>Фильм не найден</Text>
			</Layout>
		)
	}

	return (
		<Layout>
			<ScrollView contentContainerStyle={{ padding: 16 }}>
				<Image source={{ uri: movie.cover }} style={{ width: '100%', height: 300, borderRadius: 8 }} />
				<Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>{movie.name}</Text>
				<Text style={{ fontSize: 16, color: '#666', marginTop: 8 }}>{movie.description}</Text>
			</ScrollView>
		</Layout>
	)
}

export default MovieDetails
