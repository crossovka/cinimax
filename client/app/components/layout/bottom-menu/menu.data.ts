import DownloadIcon from '../../../../assets/icons/download.svg'
import HomeIcon from '../../../../assets/icons/home.svg'
import ProfileIcon from '../../../../assets/icons/profile.svg'
import SearchIcon from '../../../../assets/icons/search.svg'

export const menuItems: IMenuItem[] = [
	{
		iconName: 'home',
		path: 'Home',
		iconSource: HomeIcon // ✅ Use SVG component
	},
	{
		iconName: 'search',
		path: 'Search',
		iconSource: SearchIcon
	},
	{
		iconName: 'download',
		path: 'Download',
		iconSource: DownloadIcon
	},
	{
		iconName: 'profile',
		path: 'Profile',
		iconSource: ProfileIcon
	}
]
