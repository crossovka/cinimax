import { FC } from 'react'
import { Pressable, Text } from 'react-native'

import Layout from '@/components/layout/Layout'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Download: FC = () => {
	const navigation = useTypedNavigation()
	return (
		<Layout>
			<Text>Download</Text>
			<Pressable onPress={() => navigation.navigate('Home')}>
				<Text>Go to Home</Text>
			</Pressable>
		</Layout>
	)
}

export default Download
