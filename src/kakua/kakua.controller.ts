import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { KakuaDto } from './dto/kakua.dto';
import { KakuaService } from './kakua.service';



@Controller('kakua/create')
export class KakuaController {
  constructor(private readonly kakuaService: KakuaService) {}

  @Post()
  create(@Body() KakuaDto: KakuaDto) {

    return this.kakuaService.create(KakuaDto);
   
  }

  @Get()
  findAll() {
    return this.kakuaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kakuaService.findOne(id); 
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKakuaDto: KakuaDto) {
    return this.kakuaService.update(id, updateKakuaDto); 
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kakuaService.remove(id); 
  }
}
