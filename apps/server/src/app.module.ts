import { Module } from '@nestjs/common';

import { DatabaseService } from './services/database/database.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })],
  controllers: [],
  providers: [ DatabaseService],
})
export class AppModule {}
