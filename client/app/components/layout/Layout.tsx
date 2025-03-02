import React, { FC, PropsWithChildren } from 'react'
import { ScrollView, View } from 'react-native'

import styles from './Layout.styles'

interface ILayout {
	className?: keyof typeof styles // Типизируем className как один из ключей объекта styles
}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, className }) => {
	return (
		<View style={[styles.container, className && styles[className]]}>
			<ScrollView showsVerticalScrollIndicator={false}>
				{children}
			</ScrollView>
		</View>
	)
}

export default Layout
