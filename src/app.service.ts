import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      status: 'ok',
      service: 'sweetleaf-api',
      timestamp: new Date().toISOString(),
    };
  }
}
