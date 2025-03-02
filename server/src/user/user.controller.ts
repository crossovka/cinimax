import { Controller, Get, HttpCode, Patch, Body } from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { UserService } from './user.service'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@Auth()
	async getProfile(@CurrentUser('id') id: string) {
		return this.userService.getById(id)
	}

	@HttpCode(200)
	@Auth()
	@Patch('profile/update')
	async updateProfile(@CurrentUser('id') id: string, @Body() dto: UpdateUserDto) {
		return this.userService.updateProfile(id, dto)
	}
}
