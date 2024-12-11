import { Injectable } from '@nestjs/common';
import { Kakua } from './entities/kakua.entity';
import { ObjectId } from 'mongodb';
import { EntityManager } from 'typeorm';


@Injectable()
export class KakuaService {
  constructor(private readonly entityManager: EntityManager) {}

  async create(data: Partial<Kakua>): Promise<Kakua> {
 
    const kak = await this.entityManager.create(Kakua, data);
    console.log(kak)
    return await this.entityManager.save(kak);
  }

  async findAll(): Promise<Kakua[]> {
    return await this.entityManager.find(Kakua);
  }

  async findOne(id: string): Promise<Kakua> {
    const objectId = new ObjectId(id); 
    return await this.entityManager.findOne(Kakua, { where: { id: objectId } });
  }

  async update(id: string, data: Partial<Kakua>): Promise<Kakua> {
    const objectId = new ObjectId(id); 
    await this.entityManager.update(Kakua, objectId, data);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const objectId = new ObjectId(id); 
    await this.entityManager.delete(Kakua, objectId);
  }
}
