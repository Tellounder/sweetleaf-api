import { Module } from '@nestjs/common';
import { DesignService } from './design.service';
import { DesignController } from './design.controller';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

@Module({
  controllers: [DesignController],
  providers: [DesignService, ApiKeyGuard],
  exports: [DesignService],
})
export class DesignModule {}
