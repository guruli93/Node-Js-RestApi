import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { RepositoryCrudService } from './repository-crud/repository-crud.service';

@Module({
  providers: [RepositoryCrudService,
    {
      provide: 'IUserService',  
      useClass: UserService,  
    },UserService
  ],
  exports: ['IUserService'], 
})
export class ReferenceModule {}
