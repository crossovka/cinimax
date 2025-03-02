import { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'

import { IButton } from './Button.interface'
import { styles } from './Button.styles'

const Button: FC<PropsWithChildren<IButton>> = ({ children, ...rest }) => {
	return (
		<Pressable style={styles.button} {...rest}>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	)
}

export default Button
