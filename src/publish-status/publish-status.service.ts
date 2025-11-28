import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdatePublishStatusDto } from './dto/update-publish-status.dto';

@Injectable()
export class PublishStatusService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.publishStatus.findMany({
      include: { block: true },
      orderBy: { updatedAt: 'desc' },
    });
  }

  async findByBlockKey(blockKey: string) {
    const block = await this.prisma.designBlock.findUnique({
      where: { blockKey },
      include: { publishStatus: true },
    });

    if (!block) {
      throw new NotFoundException(`Block ${blockKey} was not found`);
    }

    return block.publishStatus ?? null;
  }

  async update(blockKey: string, dto: UpdatePublishStatusDto) {
    const block = await this.prisma.designBlock.findUnique({
      where: { blockKey },
      include: { publishStatus: true },
    });

    if (!block) {
      throw new NotFoundException(`Block ${blockKey} was not found`);
    }

    if (block.publishStatus) {
      const shouldBump =
        dto.bumpVersion === undefined ? true : dto.bumpVersion;
      const nextVersion =
        dto.version ??
        (shouldBump
          ? block.publishStatus.version + 1
          : block.publishStatus.version);

      return this.prisma.publishStatus.update({
        where: { blockId: block.id },
        data: {
          isPublished: dto.isPublished ?? block.publishStatus.isPublished,
          publishedBy: dto.publishedBy ?? block.publishStatus.publishedBy,
          version: nextVersion,
        },
      });
    }

    return this.prisma.publishStatus.create({
      data: {
        blockId: block.id,
        isPublished: dto.isPublished ?? true,
        publishedBy: dto.publishedBy,
        version: dto.version ?? 1,
      },
    });
  }
}
