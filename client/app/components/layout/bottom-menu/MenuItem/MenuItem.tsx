import { FC } from 'react'
import { Image, Pressable } from 'react-native'

import { IMenuItem, TypeNavigate } from '../menu.interface'

import styles from './MenuItem.styles'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNavigate
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, item, nav }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable style={styles.container} onPress={() => nav(item.path)}>
			{/* <Image
				source={item.iconName}
				style={{
					width: 26,
					height: 26,
					tintColor: isActive ? '#47AA52' : '#374151'
				}}
			/> */}
		</Pressable>
	)
}

export default MenuItem
