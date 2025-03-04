import { StyleSheet } from 'react-native'

import { PRIMARY_COLORS } from '../variables'

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		paddingHorizontal: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		borderTopWidth: 1,
		backgroundColor: PRIMARY_COLORS.dark
	}
})

export default styles
