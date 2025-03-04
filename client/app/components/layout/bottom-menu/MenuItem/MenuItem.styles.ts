import { StyleSheet } from 'react-native'

import { PRIMARY_COLORS } from '../../variables'

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 12,
		paddingVertical: 12,
		borderRadius: 8
	},

	active: {
		backgroundColor: PRIMARY_COLORS.soft
	},

	icon: {
		width: 24,
		height: 24
	},

	text: {
		marginLeft: 6.8,
		color: PRIMARY_COLORS.blueAccent,
		fontSize: 14,
		fontWeight: '500'
	},

	activeText: {
		color: PRIMARY_COLORS.blueAccent
	}
})

export default styles
