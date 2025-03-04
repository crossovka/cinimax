import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	// Enable CORS
	app.enableCors({
		origin: '*' // Allow all origins (you can specify a specific origin if needed)
	})

	app.setGlobalPrefix('api')
	const port = process.env.PORT ?? 3000

	// Указываем 0.0.0.0, чтобы сервер слушал на всех интерфейсах
	await app.listen(port, '0.0.0.0')

	const url = await app.getUrl()
	console.log(`🚀 Server is running at ${url}`)
}

bootstrap()
