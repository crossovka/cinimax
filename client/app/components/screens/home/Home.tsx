import { FC } from 'react'
import { Text } from 'react-native'

import Layout from '@/components/layout/Layout'

import globalStyles from '../../styles/globalStyles'

const Home: FC = () => {
	return (
		<Layout>
			<Text style={globalStyles.paragraph}>Home</Text>
		</Layout>
	)
}

export default Home
