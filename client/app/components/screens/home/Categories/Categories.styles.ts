import { StyleSheet } from 'react-native'

import { PRIMARY_COLORS, TEXT_COLORS } from '@/styles/variables'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginBottom: 20,
		paddingLeft: 8 // Добавим немного отступа слева
	},
	button: {
		paddingVertical: 8,
		paddingHorizontal: 32,
		borderRadius: 8,
		marginRight: 12 // Отступ между кнопками
	},
	active: {
		backgroundColor: PRIMARY_COLORS.soft
	},
	text: {
		fontSize: 14,
		color: TEXT_COLORS.white
	},
	activeText: {
		color: PRIMARY_COLORS.blueAccent
	}
})

export default styles
