import { useNavigation } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'
import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useState
} from 'react'

import { getAccessToken, getUserFromStorage } from '@/services/auth/auth.helper'
import { IContext, TypeUserState } from './auth-provder.interface'


export const AuthContext = createContext<IContext | null>(null)

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [navigation, setNavigation] = useState<any>(null)

	useEffect(() => {
		SplashScreen.preventAutoHideAsync()

		const checkAccessToken = async () => {
			try {
				const accessToken = await getAccessToken()
				if (accessToken) {
					const user = await getUserFromStorage()
					setUser(user)
				}
			} catch (e) {
				console.error('Ошибка при проверке токена', e)
			} finally {
				setIsLoading(false)
			}
		}

		checkAccessToken()
	}, [])

	useEffect(() => {
		if (!isLoading) {
			SplashScreen.hideAsync()
		}
	}, [isLoading])

	// Редирект на Home после успешного входа
	useEffect(() => {
		if (user && navigation) {
			navigation.navigate('Home')
		}
	}, [user, navigation])
	
	return (
		<AuthContext.Provider value={{ user, setUser, setNavigation }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
