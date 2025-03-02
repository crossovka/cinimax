export function slugify(text: string): string {
	return text
		.toString()
		.toLowerCase()
		.trim()
		.replace(/[\s\W-]+/g, '-') // Убираем пробелы и спецсимволы, заменяем на '-'
}
