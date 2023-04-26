import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';

import { CacheService } from './cache.service';
import { AppController } from './app.controller';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: async () => ({
        store: await redisStore(),
        host: 'localhost',
        port: 6379,
      }),
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [CacheService],
})
export class AppModule {}
