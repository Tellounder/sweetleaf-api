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
exports.DesignService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DesignService = class DesignService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.designBlock.findMany({
            include: { publishStatus: true },
            orderBy: { blockKey: 'asc' },
        });
    }
    async findByKey(blockKey) {
        const block = await this.prisma.designBlock.findUnique({
            where: { blockKey },
            include: { publishStatus: true },
        });
        if (!block) {
            throw new common_1.NotFoundException(`Block ${blockKey} was not found`);
        }
        return block;
    }
    async upsertBlock(blockKey, dto) {
        if (!dto.content && !dto.label) {
            throw new common_1.UnprocessableEntityException('Provide at least one property to update');
        }
        const data = {
            blockKey,
            label: dto.label ?? blockKey,
            content: (dto.content ?? {}),
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
                    ? dto.content
                    : undefined,
            },
            include: { publishStatus: true },
        });
    }
};
exports.DesignService = DesignService;
exports.DesignService = DesignService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DesignService);
//# sourceMappingURL=design.service.js.map