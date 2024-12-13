import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserInfoService } from './user-info/user-info.service';
import { UserCardsService } from './user-cards/user-cards.service';
import { KoteService } from './kote/kote.service';
import { KoteInfoService } from './kote-info/kote-info.service';

@Module({
  providers: [UserService, UserInfoService, UserCardsService, KoteService, KoteInfoService]
})
export class RepositorysModule {}
