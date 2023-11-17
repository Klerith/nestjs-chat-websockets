import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { ChatModule } from './chat/chat.module';


@Module({
  imports: [
    ChatModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      })
  ],
  
})
export class AppModule {}
