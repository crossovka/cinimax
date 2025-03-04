import { FC } from 'react'
import { SvgProps } from 'react-native-svg'

import { TypeRootStackParamList } from '@/navigation/navigation.types'

export interface IMenuItem {
	iconName: string
	path: keyof TypeRootStackParamList
	iconSource: FC<SvgProps>
}

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void
