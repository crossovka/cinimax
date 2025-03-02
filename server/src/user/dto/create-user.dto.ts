/* eslint-disable indent */
import { IsEmail, IsString, MinLength } from 'class-validator'

export class CreateUserDto {
	@IsEmail()
	email: string

	@IsString()
	@MinLength(6)
	password: string

	@IsString()
	name: string

	@IsString()
	avatarPath?: string

	@IsString()
	phone?: string
}
