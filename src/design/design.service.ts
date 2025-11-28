import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateDesignBlockDto } from './dto/update-design-block.dto';

@Injectable()
export class DesignService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.designBlock.findMany({
      include: { publishStatus: true },
      orderBy: { blockKey: 'asc' },
    });
  }

  async findByKey(blockKey: string) {
    const block = await this.prisma.designBlock.findUnique({
      where: { blockKey },
      include: { publishStatus: true },
    });

    if (!block) {
      throw new NotFoundException(`Block ${blockKey} was not found`);
    }

    return block;
  }

  async upsertBlock(blockKey: string, dto: UpdateDesignBlockDto) {
    if (!dto.content && !dto.label) {
      throw new UnprocessableEntityException(
        'Provide at least one property to update',
      );
    }

    const data: Prisma.DesignBlockUncheckedCreateInput = {
      blockKey,
      label: dto.label ?? blockKey,
      content: (dto.content ?? {}) as Prisma.InputJsonValue,
    };

    return this.prisma.designBlock.upsert({
      where: { blockKey },
      create: {
        ...data,
        publishStatus: {
          create: {
            isPublished: true,
          },
        },
      },
      update: {
        label: dto.label ?? undefined,
        content: dto.content
          ? (dto.content as Prisma.InputJsonValue)
          : undefined,
      },
      include: { publishStatus: true },
    });
  }
}
