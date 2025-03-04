import { StyleSheet } from 'react-native'

import { FONTS, PRIMARY_COLORS, TEXT_COLORS } from '@/styles/variables'

export const movieCardStyles = StyleSheet.create({
	card: {
		borderRadius: 8,
		overflow: 'hidden',
		marginBottom: 16,
		backgroundColor: PRIMARY_COLORS.soft,
		elevation: 2,
		shadowColor: TEXT_COLORS.black,
		shadowOpacity: 0.2,
		shadowRadius: 4,
		shadowOffset: { width: 0, height: 2 }
	},
	cover: {
		width: '100%',
		height: 200
	},
	content: {
		padding: 8
	},
	title: {
		fontSize: FONTS.h3,
		fontWeight: FONTS.weights.semibold,
		color: TEXT_COLORS.white
	},
	description: {
		fontSize: FONTS.h5,
		color: TEXT_COLORS.grey
	}
})
