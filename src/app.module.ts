import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

require('dotenv').config(); 
@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      process.env.MONGODB_KEY,
    ),
    AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
