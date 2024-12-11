import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { KakuaDto } from './dto/kakua.dto';
import { KakuaService } from './kakua.service';



@Controller('kakua')
export class KakuaController {
  constructor(private readonly kakuaService: KakuaService) {}

  @Post('create')
  async create(@Body() KakuaDto: KakuaDto) {

    return this.kakuaService.create(KakuaDto);
   
  }

  @Get('findAll')
  async findAll() {
    return this.kakuaService.findAll();
  }

  @Get(':id')
 async findOne(@Param('id') id: string) {
    return  this.kakuaService.findOne(id); 
  }

  @Patch(':id')
 async update(@Param('id') id: string, @Body() updateKakuaDto: KakuaDto) {
    return this.kakuaService.update(id, updateKakuaDto); 
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
    return this.kakuaService.remove(id); 
  }
}
