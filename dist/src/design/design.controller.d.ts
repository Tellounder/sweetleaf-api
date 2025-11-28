import { DesignService } from './design.service';
import { UpdateDesignBlockDto } from './dto/update-design-block.dto';
export declare class DesignController {
    private readonly designService;
    constructor(designService: DesignService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
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
        content: import(".prisma/client").Prisma.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(blockKey: string): Promise<{
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
        content: import(".prisma/client").Prisma.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    upsert(blockKey: string, dto: UpdateDesignBlockDto): Promise<{
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
        content: import(".prisma/client").Prisma.JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
