"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishStatusModule = void 0;
const common_1 = require("@nestjs/common");
const publish_status_service_1 = require("./publish-status.service");
const publish_status_controller_1 = require("./publish-status.controller");
const api_key_guard_1 = require("../common/guards/api-key.guard");
let PublishStatusModule = class PublishStatusModule {
};
exports.PublishStatusModule = PublishStatusModule;
exports.PublishStatusModule = PublishStatusModule = __decorate([
    (0, common_1.Module)({
        controllers: [publish_status_controller_1.PublishStatusController],
        providers: [publish_status_service_1.PublishStatusService, api_key_guard_1.ApiKeyGuard],
        exports: [publish_status_service_1.PublishStatusService],
    })
], PublishStatusModule);
//# sourceMappingURL=publish-status.module.js.map