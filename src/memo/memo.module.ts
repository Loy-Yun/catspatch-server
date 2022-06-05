import { Module } from '@nestjs/common';
import { MemoController } from './memo.controller';
import { MemoService } from './memo.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Memo } from "./entity/memo.entity";
import { UserService } from "../user/user.service";
import { User } from "../user/entity/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Memo, User])],
  controllers: [MemoController],
  providers: [MemoService]
})
export class MemoModule {}
