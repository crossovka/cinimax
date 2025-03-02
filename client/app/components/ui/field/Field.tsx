import { Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { styles } from './Field.styles'
import { IField } from './field.interface'

const Field = <T extends Record<string, any>>({
	control,
	rules,
	name,
	...rest
}: IField<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						style={[
							styles.container,
							error && styles.containerError
						]}
					>
						<TextInput
							autoCapitalize='none'
							onChangeText={onChange}
							onBlur={onBlur}
							value={(value || '').toString()}
							style={styles.input}
							placeholderTextColor='#6A6A6A'
							{...rest}
						/>
					</View>
					{error && (
						<Text style={styles.errorText}>{error.message}</Text>
					)}
				</>
			)}
		/>
	)
}

export default Field
