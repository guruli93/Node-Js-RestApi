import { ObjectId } from "mongodb";
import { KakuaDto } from "src/kakua/dto/kakua.dto";


export interface IUserService {
  create(data: KakuaDto): Promise<boolean>;

  findAll(): Promise<KakuaDto[]>;

  findOne(id: string): Promise<KakuaDto>;

  update(id: string, data: Partial<KakuaDto>): Promise<KakuaDto>;

  remove(id: string): Promise<boolean>;
}
