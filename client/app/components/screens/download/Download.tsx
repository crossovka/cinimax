import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const Download: FC = () => {
	const navigation = useTypedNavigation()
	return (
		<View>
			<Text>Download</Text>
			<Pressable onPress={() => navigation.navigate('Home')}>
				<Text>Go to Home</Text>
			</Pressable>
		</View>
	)
}

export default Download
