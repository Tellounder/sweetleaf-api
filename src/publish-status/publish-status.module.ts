import { Module } from '@nestjs/common';
import { PublishStatusService } from './publish-status.service';
import { PublishStatusController } from './publish-status.controller';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

@Module({
  controllers: [PublishStatusController],
  providers: [PublishStatusService, ApiKeyGuard],
  exports: [PublishStatusService],
})
export class PublishStatusModule {}
