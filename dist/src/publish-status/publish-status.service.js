"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishStatusService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PublishStatusService = class PublishStatusService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.publishStatus.findMany({
            include: { block: true },
            orderBy: { updatedAt: 'desc' },
        });
    }
    async findByBlockKey(blockKey) {
        const block = await this.prisma.designBlock.findUnique({
            where: { blockKey },
            include: { publishStatus: true },
        });
        if (!block) {
            throw new common_1.NotFoundException(`Block ${blockKey} was not found`);
        }
        return block.publishStatus ?? null;
    }
    async update(blockKey, dto) {
        const block = await this.prisma.designBlock.findUnique({
            where: { blockKey },
            include: { publishStatus: true },
        });
        if (!block) {
            throw new common_1.NotFoundException(`Block ${blockKey} was not found`);
        }
        if (block.publishStatus) {
            const shouldBump = dto.bumpVersion === undefined ? true : dto.bumpVersion;
            const nextVersion = dto.version ??
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
};
exports.PublishStatusService = PublishStatusService;
exports.PublishStatusService = PublishStatusService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PublishStatusService);
//# sourceMappingURL=publish-status.service.js.map