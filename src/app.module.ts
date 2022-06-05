import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MemoModule } from './memo/memo.module';
import { MomoController } from './momo/momo.controller';

@Module({
  imports: [UserModule, MemoModule],
  controllers: [AppController, MomoController],
  providers: [AppService],
})
export class AppModule {}
