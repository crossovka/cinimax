import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CategoriesModule } from './categories/categories.module'
import { MoviesModule } from './movies/movies.module';
import { CommentsModule } from './comments/comments.module';
import { ActorsModule } from './actors/actors.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				type: 'postgres',
				host: configService.get('DB_HOST'),
				port: configService.get('DB_PORT'),
				username: configService.get('DB_USERNAME'),
				password: configService.get('DB_PASSWORD'),
				database: configService.get('DB_NAME'),
				entities: [__dirname + '/**/*.entity{.ts,.js}'],
				migrations: [__dirname + '/migrations/*.{js,ts}'], // Папка с миграциями
				migrationsRun: true, // Автоматически запускать миграции при старте
				logging: false,
				synchronize: true // Отключите в продакшене! / если миграции определяют структуру
			}),
			inject: [ConfigService]
		}),
		CategoriesModule,
		MoviesModule,
		CommentsModule,
		ActorsModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
