import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CacheService } from './cache.service';
import { AppDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly cacheService: CacheService) {}

  @Get(':key')
  async get(@Param('key') key: string) {
    return await this.cacheService.get(key);
  }

  @Post(':key')
  async post(@Param('key') key: string, @Body() body: AppDto) {
    return await this.cacheService.set(key, body.value, body.ttl);
  }
}
