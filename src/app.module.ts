import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { UserController } from './modules/user/controllers/user.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
  ],

  controllers: [UserController],
  providers: [],
})
export class AppModule {}
