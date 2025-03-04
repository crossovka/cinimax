// import { SERVER_URL } from '@env';

// export const API_URL = `${SERVER_URL}/api`;
export const API_URL = `http://10.0.2.2:3000/api`

console.log(`API_URL ${API_URL}`);


export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getCategoriesUrl = (string: string) => `/categories${string}`
export const getMoviesUrl = (string: string) => `/movies${string}`