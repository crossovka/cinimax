import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	Download: undefined
	Profile: undefined
	Search: undefined
	MovieDetails: { slug: string }
	// Category: {
	// 	slug: string
	// }
}

export interface IRoute {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
