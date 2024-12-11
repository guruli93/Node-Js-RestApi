import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KakuaModule } from './kakua/kakua.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb', // Specify the database type
      host: 'localhost', // Replace with your MongoDB host
      port: 27017, // MongoDB default port
      database: 'kakuaDB', // Replace with your database name
      useUnifiedTopology: true, // Recommended for MongoDB connection
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Path to entities
      synchronize: true, // Automatically sync database schema (disable in production)
    }),
    KakuaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
