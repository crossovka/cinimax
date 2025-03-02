import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>
	) {}

	async getById(id: string): Promise<User> {
		const user = await this.userRepository.findOne({
			where: { id }
		})

		if (!user) {
			throw new NotFoundException('User not found')
		}

		return user
	}

	async updateProfile(id: string, dto: UpdateUserDto): Promise<User> {
		await this.userRepository.update(id, dto)
		return this.getById(id)
	}
}
