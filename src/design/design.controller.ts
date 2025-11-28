import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { DesignService } from './design.service';
import { UpdateDesignBlockDto } from './dto/update-design-block.dto';
import { ApiKeyGuard } from '../common/guards/api-key.guard';

@Controller('design')
export class DesignController {
  constructor(private readonly designService: DesignService) {}

  @Get('blocks')
  findAll() {
    return this.designService.findAll();
  }

  @Get('blocks/:blockKey')
  findOne(@Param('blockKey') blockKey: string) {
    return this.designService.findByKey(blockKey);
  }

  @Put('blocks/:blockKey')
  @UseGuards(ApiKeyGuard)
  upsert(
    @Param('blockKey') blockKey: string,
    @Body() dto: UpdateDesignBlockDto,
  ) {
    return this.designService.upsertBlock(blockKey, dto);
  }
}
