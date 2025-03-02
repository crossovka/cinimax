import Auth from '@/components/screens/auth/Auth'
import Download from '@/components/screens/download/Download'
import Home from '@/components/screens/home/Home'

import { IRoute } from './navigation.types'

export const routes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Auth',
		component: Auth
	},
	{
		name: 'Download',
		component: Download
	}
]
