import React, { FC } from 'react'
import {
	ActivityIndicator,
	Pressable,
	ScrollView,
	Text,
	View
} from 'react-native'

import styles from './Categories.styles'
import { useCategories } from './useCategories'

interface CategoriesProps {
	activeCategory: string
	onCategoryPress: (categorySlug: string) => void
}

const Categories: FC<CategoriesProps> = ({
	activeCategory,
	onCategoryPress
}) => {
	const { isLoading, categories } = useCategories()

	if (isLoading) {
		return (
			<View style={{ padding: 16 }}>
				<ActivityIndicator size='large' color='#0000ff' />
			</View>
		)
	}

	return (
		<ScrollView
			horizontal
			contentContainerStyle={styles.container}
			showsHorizontalScrollIndicator={false}
		>
			{/* Кнопка "Все" */}
			<Pressable
				style={[
					styles.button,
					activeCategory === 'all' && styles.active
				]}
				onPress={() => onCategoryPress('all')}
			>
				<Text
					style={[
						styles.text,
						activeCategory === 'all' && styles.activeText
					]}
				>
					Все
				</Text>
			</Pressable>

			{/* Отображение категорий по slug */}
			{categories?.map(category => (
				<Pressable
					key={category.slug} // Используем slug как ключ
					style={[
						styles.button,
						activeCategory === category.slug && styles.active
					]}
					onPress={() => onCategoryPress(category.slug)}
				>
					<Text
						style={[
							styles.text,
							activeCategory === category.slug &&
								styles.activeText
						]}
					>
						{category.name}
					</Text>
				</Pressable>
			))}
		</ScrollView>
	)
}

export default Categories
