import { PublishStatusService } from './publish-status.service';
import { UpdatePublishStatusDto } from './dto/update-publish-status.dto';
export declare class PublishStatusController {
    private readonly publishStatusService;
    constructor(publishStatusService: PublishStatusService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        block: {
            id: string;
            blockKey: string;
            label: string;
            content: import(".prisma/client").Prisma.JsonValue;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        blockId: string;
        isPublished: boolean;
        version: number;
        publishedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(blockKey: string): Promise<{
        id: string;
        blockId: string;
        isPublished: boolean;
        version: number;
        publishedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(blockKey: string, dto: UpdatePublishStatusDto): Promise<{
        id: string;
        blockId: string;
        isPublished: boolean;
        version: number;
        publishedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
