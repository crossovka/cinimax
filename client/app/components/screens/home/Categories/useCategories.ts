import { useQuery } from '@tanstack/react-query'

import { ICategory } from '@/types/category.interface'

import { CategoryService } from '@/services/category.service'

export const useCategories = () => {
	// Запрос для получения всех категорий
	const { isLoading, data: categories } = useQuery<ICategory[]>({
		queryKey: ['get all categories'],
		queryFn: () => CategoryService.getAll()
	})

	return { isLoading, categories }
}
