import React, { FC } from 'react'
import { Text } from 'react-native'

import styles from './Heading.styles'

interface HeadingProps {
	text: string
	isCenter?: boolean
}

const Heading: FC<HeadingProps> = ({ text, isCenter }) => {
	return <Text style={[styles.text, isCenter && styles.center]}>{text}</Text>
}

export default Heading
