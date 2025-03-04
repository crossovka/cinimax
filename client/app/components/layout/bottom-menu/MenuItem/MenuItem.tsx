import React, { FC } from 'react'
import { Pressable, Text } from 'react-native'

import { PRIMARY_COLORS } from '../../variables'
import { IMenuItem, TypeNavigate } from '../menu.interface'

import styles from './MenuItem.styles'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNavigate
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, item, nav }) => {
	const isActive = currentRoute === item.path
	const IconComponent = item.iconSource

	return (
		<Pressable
			style={[styles.container, isActive && styles.active]}
			onPress={() => nav(item.path)}
		>
			<IconComponent
				width={24}
				height={24}
				fill={
					isActive ? PRIMARY_COLORS.blueAccent : PRIMARY_COLORS.gray
				} // ✅ Изменение цвета иконки
			/>
			{isActive && ( // ✅ Показываем текст только если активен
				<Text style={[styles.text, isActive && styles.activeText]}>
					{item.path}
				</Text>
			)}
		</Pressable>
	)
}

export default MenuItem
