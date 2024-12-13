import { Injectable } from '@nestjs/common';
import { KakuaDto } from 'src/kakua/dto/kakua.dto';
import { IUserService } from './IUserService';
import { RepositoryCrudService } from '../repository-crud/repository-crud.service';
import { Tree } from 'typeorm';


@Injectable()
export class UserService implements IUserService {
    constructor(private readonly repositoryCrudService:RepositoryCrudService){}

   async create(entityData: KakuaDto): Promise<boolean> {
       
    await this.repositoryCrudService.creteUser(entityData);

       return true;
    }
    findAll(): Promise<KakuaDto[]> {
        throw new Error('Method not implemented.');
    }
    findOne(id: string): Promise<KakuaDto> {
        throw new Error('Method not implemented.');
    }
    update(id: string, entityData: Partial<KakuaDto>): Promise<KakuaDto> {
        throw new Error('Method not implemented.');
    }
    remove(id: string): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
