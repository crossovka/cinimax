import { StyleSheet } from 'react-native'

import { FONTS, TEXT_COLORS } from '@/components/layout/variables'

const styles = StyleSheet.create({
	text: {
		fontSize: FONTS.h4,
		fontWeight: FONTS.weights.semibold,
		color: TEXT_COLORS.white,
		marginBottom: 15
	},
	center: {
		textAlign: 'center'
	}
})

export default styles
