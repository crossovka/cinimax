import React, { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import styles from './BottomMenu.styles'
import MenuItem from './MenuItem/MenuItem'
import { menuItems } from './menu.data'
import { TypeNavigate } from './menu.interface'

interface IBottomMenu {
	navigation: TypeNavigate // Функция для навигации
	currentRoute?: string
}

const BottomMenu: FC<IBottomMenu> = ({ navigation, currentRoute }) => {
	const { bottom } = useSafeAreaInsets()

	return (
		<View style={[styles.container, { paddingBottom: bottom + 20 }]}>
			{menuItems.map(item => (
				<MenuItem
					key={item.path}
					item={item}
					nav={navigation}
					currentRoute={currentRoute}
				/>
			))}
		</View>
	)
}

export default BottomMenu
