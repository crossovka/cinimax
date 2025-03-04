import React, { FC } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import { IMovie } from '@/types/movie.interface'

import { movieCardStyles as styles } from './movieCard.styles'

interface MovieCardProps {
	movie: IMovie
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
	const navigation = useTypedNavigation()
	console.log(movie)

	return (
		<TouchableOpacity
			style={styles.card}
			onPress={() =>
				navigation.navigate('MovieDetails', { slug: movie.slug })
			}
		>
			<Image source={{ uri: movie.cover }} style={styles.cover} />
			<View style={styles.content}>
				<Text style={styles.title}>{movie.name}</Text>
				{/* <Text style={styles.description} numberOfLines={2}>
					{movie.description}
				</Text> */}
			</View>
		</TouchableOpacity>
	)
}

export default MovieCard
