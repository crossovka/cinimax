/* eslint-disable indent */
import { IsNotEmpty, IsOptional, IsString, IsArray } from 'class-validator'

export class CreateActorDto {
	@IsNotEmpty()
	@IsString()
	name: string

	@IsOptional()
	@IsString()
	photo?: string

	@IsOptional()
	@IsString()
	bio?: string

	@IsOptional()
	@IsArray()
	@IsString({ each: true })
	movieSlugs?: string[]
}
