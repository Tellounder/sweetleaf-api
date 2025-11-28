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
exports.PublishStatusController = void 0;
const common_1 = require("@nestjs/common");
const publish_status_service_1 = require("./publish-status.service");
const update_publish_status_dto_1 = require("./dto/update-publish-status.dto");
const api_key_guard_1 = require("../common/guards/api-key.guard");
let PublishStatusController = class PublishStatusController {
    publishStatusService;
    constructor(publishStatusService) {
        this.publishStatusService = publishStatusService;
    }
    findAll() {
        return this.publishStatusService.findAll();
    }
    findOne(blockKey) {
        return this.publishStatusService.findByBlockKey(blockKey);
    }
    update(blockKey, dto) {
        return this.publishStatusService.update(blockKey, dto);
    }
};
exports.PublishStatusController = PublishStatusController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublishStatusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':blockKey'),
    __param(0, (0, common_1.Param)('blockKey')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublishStatusController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':blockKey'),
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    __param(0, (0, common_1.Param)('blockKey')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_publish_status_dto_1.UpdatePublishStatusDto]),
    __metadata("design:returntype", void 0)
], PublishStatusController.prototype, "update", null);
exports.PublishStatusController = PublishStatusController = __decorate([
    (0, common_1.Controller)('publish-status'),
    __metadata("design:paramtypes", [publish_status_service_1.PublishStatusService])
], PublishStatusController);
//# sourceMappingURL=publish-status.controller.js.map