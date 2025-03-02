export const SERVER_URL = process.env.SERVER_URL
// export const API_URL = `${SERVER_URL}/api`
export const API_URL = `http://192.168.122.35:3000/api`
console.log(`API_URL ${API_URL}`)

export const getAuthUrl = (string: string) => `/auth${string}`
export const getUsersUrl = (string: string) => `/users${string}`
export const getProductsUrl = (string: string) => `/products${string}`
export const getCategoriesUrl = (string: string) => `/categories${string}`
export const getOrdersUrl = (string: string) => `/orders${string}`