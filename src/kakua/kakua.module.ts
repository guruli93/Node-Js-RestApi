import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KakuaService } from './kakua.service';
import { KakuaController } from './kakua.controller';
import { Kakua } from './entities/kakua.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kakua])],
  controllers: [KakuaController],
  providers: [KakuaService],
})
export class KakuaModule {}
