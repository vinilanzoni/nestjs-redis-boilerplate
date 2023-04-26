import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  async get(key: string): Promise<string> {
    return String(await this.cacheManager.get(key));
  }
  set(key: string, value: string, ttl?: number): Promise<void> {
    if (ttl && ttl > 0) {
      if (ttl < 1000) {
        ttl = ttl * 1000;
      }
      return this.cacheManager.set(key, value, ttl);
    } else {
      return this.cacheManager.set(key, value);
    }
  }
}
