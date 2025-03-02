import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		width: '100%',
		borderRadius: 8,
		paddingVertical: 10,
		paddingHorizontal: 16,
		marginVertical: 6,
		borderWidth: 1,
		borderColor: '#B0B0B0'
	},

	containerError: {
		borderColor: 'red'
	},

	input: {
		color: '#000',
		fontSize: 16
	},

	errorText: {
		color: 'red',
		marginTop: 4
	}
})
