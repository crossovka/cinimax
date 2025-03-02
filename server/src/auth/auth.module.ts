import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getJwtConfig } from 'src/config/jwt.config'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'
import { UserService } from 'src/user/user.service'
import { UserModule } from 'src/user/user.module'
import { User } from 'src/user/entities/user.entity'

@Module({
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy, UserService],
	imports: [
		ConfigModule,
		TypeOrmModule.forFeature([User]),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		}),
		UserModule
	]
})
export class AuthModule {}
