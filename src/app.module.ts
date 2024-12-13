import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KakuaModule } from './kakua/kakua.module';
import { ControllersController } from './controllers/controllers.controller';
import { RobikaController } from './controllers/robika/robika.controller';
import { ShipoController } from './controllers/shipo/shipo.controller';
import { KoteController } from './controllers/kote/kote.controller';
import { UserModule } from './repositorys/user/user.module';
import { UserInfoService } from './user-info/user-info.service';
import { UserService } from './user/user.service';
import { RepositorysModule } from './repositorys/repositorys.module';
import { User2Module } from './repositorys/user2/user2.module';
import { UserModule } from './repositorys/user/user.module';


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
    UserModule,
    User2Module,
    RepositorysModule,
   
  ],
  controllers: [AppController, ControllersController, RobikaController, ShipoController, KoteController],
  providers: [AppService, UserService, UserInfoService, ],
})
export class AppModule {}
