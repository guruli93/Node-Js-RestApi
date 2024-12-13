import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { Kakua } from 'src/entities/kakua.entity';
import { KakuaDto } from 'src/kakua/dto/kakua.dto';
import { EntityManager } from 'typeorm';



@Injectable()
export class RepositoryCrudService {
    constructor(private readonly entityManager: EntityManager) { }

    async creteUser(entityUser: KakuaDto): Promise<Boolean> {
        await this.entityManager.create(Kakua, entityUser);
        await this.entityManager.save(Kakua, entityUser)
        return true;
    }
    async updateUser(id: string, entityUser: Partial<KakuaDto>): Promise<Kakua> {
        const UID = new ObjectId(id);

        const user = await this.entityManager.findOne(Kakua, { where: { id: UID } })

        await this.entityManager.update(Kakua, user, entityUser);

        return await this.entityManager.findOne(Kakua, { where: { id: UID } })
    }
    async deleteUser(id: string): Promise<boolean> {
        const UID = new ObjectId(id);

        const user = await this.entityManager.findOne(Kakua, { where: { id: UID } })

        await this.entityManager.remove(user);

        throw new Error('Method not implemented.');
    }
    async findUser(id: string): Promise<KakuaDto> {
        const UID = new ObjectId(id);
        const user = await this.entityManager.findOne(Kakua, { where: { id: UID } })
        return user;
    }
    async findallUser(): Promise<KakuaDto[]> {
        return await this.entityManager.find(Kakua);
    }
}
