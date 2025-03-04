import React, { FC, useState } from 'react'
import {
	ActivityIndicator,
	Pressable,
	ScrollView,
	Text,
	View
} from 'react-native'

import { useCategories } from './useCategories'

import styles from './Categories.styles'

interface CategoriesProps {
	activeCategory: string
	onCategoryPress: (category: string) => void
}

const Categories: FC<CategoriesProps> = ({
	activeCategory,
	onCategoryPress
}) => {
	// Используем хук useCategories для получения категорий внутри компонента
	const { isLoading, categories } = useCategories()

	// Если данные загружаются, показываем индикатор загрузки
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
			{categories?.map(category => (
				<Pressable
					key={category.name} // предполагаем, что у категории есть поле name
					style={[
						styles.button,
						activeCategory === category.name && styles.active
					]}
					onPress={() => onCategoryPress(category.name)}
				>
					<Text
						style={[
							styles.text,
							activeCategory === category.name &&
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
