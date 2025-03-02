/* eslint-disable indent */
import { IsString, IsOptional, IsArray, IsDateString } from 'class-validator'

export class CreateMovieDto {
	@IsString()
	name: string

	@IsString()
	slug: string

	@IsDateString()
	releaseDate: string

	@IsOptional()
	@IsString()
	description?: string

	@IsOptional()
	@IsString()
	videoUrl?: string

	@IsOptional()
	@IsString()
	cover?: string

	@IsOptional()
	@IsArray()
	categorySlugs?: string[]

	@IsOptional()
	@IsArray()
	actorSlugs?: string[]
}
