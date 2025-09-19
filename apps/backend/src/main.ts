import { NestFactory } from '@nestjs/core';
import dotenv from 'dotenv';
import path from 'path';
import { AppModule } from './app.module';

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
});

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    console.log(`Listening on port ${process.env.PORT}`);

    await app.listen(process.env.PORT ?? 3001);
}

bootstrap().catch(err => {
    console.error('Bootstrap error:', err);
    process.exit(1);
});
