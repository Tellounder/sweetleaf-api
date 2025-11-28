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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignController = void 0;
const common_1 = require("@nestjs/common");
const design_service_1 = require("./design.service");
const update_design_block_dto_1 = require("./dto/update-design-block.dto");
const api_key_guard_1 = require("../common/guards/api-key.guard");
let DesignController = class DesignController {
    designService;
    constructor(designService) {
        this.designService = designService;
    }
    findAll() {
        return this.designService.findAll();
    }
    findOne(blockKey) {
        return this.designService.findByKey(blockKey);
    }
    upsert(blockKey, dto) {
        return this.designService.upsertBlock(blockKey, dto);
    }
};
exports.DesignController = DesignController;
__decorate([
    (0, common_1.Get)('blocks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DesignController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('blocks/:blockKey'),
    __param(0, (0, common_1.Param)('blockKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DesignController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)('blocks/:blockKey'),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Param)('blockKey')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_design_block_dto_1.UpdateDesignBlockDto]),
    __metadata("design:returntype", void 0)
], DesignController.prototype, "upsert", null);
exports.DesignController = DesignController = __decorate([
    (0, common_1.Controller)('design'),
    __metadata("design:paramtypes", [design_service_1.DesignService])
], DesignController);
//# sourceMappingURL=design.controller.js.map