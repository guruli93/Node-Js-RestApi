import { Controller, Inject } from '@nestjs/common';
import { IUserService } from 'src/repository2/reference/user/IUserService';

@Controller('robika')
export class RobikaController {
constructor(@Inject("IUserService") private readonly userService:IUserService){}

    
}
