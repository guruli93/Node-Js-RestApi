import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KakuaService } from './kakua.service';
import { KakuaController } from './kakua.controller';
import { Kakua } from './entities/kakua.entity';
import { ReferenceModule } from 'src/repository2/reference/reference.module';
import { RobikaController } from './robika/robika.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Kakua]),ReferenceModule],
  controllers: [KakuaController, RobikaController],
  providers: [KakuaService],
})
export class KakuaModule {}
