import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateDesignBlockDto } from './dto/update-design-block.dto';
export declare class DesignService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Prisma.PrismaPromise<({
        publishStatus: {
            id: string;
            blockId: string;
            isPublished: boolean;
            version: number;
            publishedBy: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: string;
        blockKey: string;
        label: string;
        content: Prisma.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findByKey(blockKey: string): Promise<{
        publishStatus: {
            id: string;
            blockId: string;
            isPublished: boolean;
            version: number;
            publishedBy: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: string;
        blockKey: string;
        label: string;
        content: Prisma.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    upsertBlock(blockKey: string, dto: UpdateDesignBlockDto): Promise<{
        publishStatus: {
            id: string;
            blockId: string;
            isPublished: boolean;
            version: number;
            publishedBy: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        id: string;
        blockKey: string;
        label: string;
        content: Prisma.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
