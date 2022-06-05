import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MemoModule } from './memo/memo.module';
import { databaseConfig } from "../config/database.config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    UserModule, MemoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
