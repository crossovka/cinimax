import { FC } from 'react'
import { Pressable, Text } from 'react-native'

import Layout from '@/components/layout/Layout'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Search: FC = () => {
	const navigation = useTypedNavigation()
	return (
		<Layout>
			<Text>Search</Text>
			<Pressable onPress={() => navigation.navigate('Home')}>
				<Text>Go to Home</Text>
			</Pressable>
		</Layout>
	)
}

export default Search
