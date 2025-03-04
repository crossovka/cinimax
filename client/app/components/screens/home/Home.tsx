import React, { FC, useState } from 'react'
import { ScrollView } from 'react-native'

import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading/Heading'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import Categories from './Categories/Categories'

const Home: FC = () => {
	const navigation = useTypedNavigation()
	const [activeCategory, setActiveCategory] = useState('Все')

	// Обработчик выбора категории
	const handleCategoryPress = (category: string) => {
		setActiveCategory(category)
	}

	return (
		<Layout>
			<ScrollView contentContainerStyle={{ padding: 16 }}>
				<Heading text='Категории' />
				{/* Компонент Categories теперь сам загружает категории */}
				<Categories
					activeCategory={activeCategory}
					onCategoryPress={handleCategoryPress}
				/>
				{/* Остальной контент страницы */}
			</ScrollView>
		</Layout>
	)
}

export default Home
