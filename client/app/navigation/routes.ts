import Auth from '@/components/screens/auth/Auth'
import Download from '@/components/screens/download/Download'
import Home from '@/components/screens/home/Home'
import Profile from '@/components/screens/profile/Profile'
import Search from '@/components/screens/search/Search'

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
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Profile',
		component: Profile
	}
]
