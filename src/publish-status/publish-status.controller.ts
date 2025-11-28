import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { PublishStatusService } from './publish-status.service';
import { UpdatePublishStatusDto } from './dto/update-publish-status.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

@Controller('publish-status')
export class PublishStatusController {
  constructor(private readonly publishStatusService: PublishStatusService) {}

  @Get()
  findAll() {
    return this.publishStatusService.findAll();
  }

  @Get(':blockKey')
  findOne(@Param('blockKey') blockKey: string) {
    return this.publishStatusService.findByBlockKey(blockKey);
  }

  @Patch(':blockKey')
  @UseGuards(ApiKeyGuard)
  update(
    @Param('blockKey') blockKey: string,
    @Body() dto: UpdatePublishStatusDto,
  ) {
    return this.publishStatusService.update(blockKey, dto);
  }
}
