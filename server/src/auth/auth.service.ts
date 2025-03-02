import {
	Injectable,
	BadRequestException,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { hash, verify } from 'argon2'
import { AuthDto } from './dto/auth.dto'
import { User } from 'src/user/entities/user.entity'

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(User) private readonly userRepository: Repository<User>,
		private readonly jwtService: JwtService
	) {}

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto)
		const tokens = await this.issueTokens(user.id)

		return {
			user: this.returnUserFields(user),
			...tokens
		}
	}

	async getNewTokens(refreshToken: string) {
		const result = await this.jwtService.verifyAsync(refreshToken)
		if (!result) throw new UnauthorizedException('Invalid refresh token')

		const user = await this.userRepository.findOne({ where: { id: result.id } })
		if (!user) throw new NotFoundException('User not found')

		const tokens = await this.issueTokens(user.id)

		return {
			user: this.returnUserFields(user),
			...tokens
		}
	}

	async register(dto: AuthDto) {
		const existingUser = await this.userRepository.findOne({ where: { email: dto.email } })
		if (existingUser) throw new BadRequestException('User already exists')

		const hashedPassword = await hash(dto.password)

		// const newUser = this.userRepository.create({
		// 	email: dto.email,
		// 	name: faker.person.firstName(),
		// 	avatarPath: faker.image.avatar(),
		// 	phone: faker.phone.number(),
		// 	password: hashedPassword
		// })

		const newUser = this.userRepository.create({
			email: dto.email,
			name: dto.name, // Берём имя из запроса
			avatarPath: dto.avatarPath ?? '/uploads/default-avatar.png', // Дефолтный аватар
			phone: dto.phone, // Берём телефон из запроса
			password: hashedPassword
		})

		const user = await this.userRepository.save(newUser)
		const tokens = await this.issueTokens(user.id)

		return {
			user: this.returnUserFields(user),
			...tokens
		}
	}

	private async issueTokens(userId: string) {
		const data = { id: userId }

		const accessToken = this.jwtService.sign(data, { expiresIn: '1h' })
		const refreshToken = this.jwtService.sign(data, { expiresIn: '7d' })

		return { accessToken, refreshToken }
	}

	private returnUserFields(user: Partial<User>) {
		return {
			id: user.id,
			email: user.email
		}
	}

	private async validateUser(dto: AuthDto) {
		const user = await this.userRepository.findOne({ where: { email: dto.email } })
		if (!user) throw new NotFoundException('User not found')

		const isValid = await verify(user.password, dto.password)
		if (!isValid) throw new UnauthorizedException('Invalid password')

		return user
	}
}
