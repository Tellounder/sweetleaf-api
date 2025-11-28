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
exports.ApiKeyGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let ApiKeyGuard = class ApiKeyGuard {
    configService;
    apiKey;
    constructor(configService) {
        this.configService = configService;
        this.apiKey = this.configService.get('API_KEY', '');
    }
    canActivate(context) {
        if (!this.apiKey) {
            throw new common_1.UnauthorizedException('API key is not configured on the server');
        }
        const request = context.switchToHttp().getRequest();
        const headerApiKey = request.headers['x-api-key'] ?? request.headers['x-api_key'];
        if (typeof headerApiKey !== 'string' || headerApiKey !== this.apiKey) {
            throw new common_1.UnauthorizedException('Invalid or missing API key');
        }
        return true;
    }
};
exports.ApiKeyGuard = ApiKeyGuard;
exports.ApiKeyGuard = ApiKeyGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ApiKeyGuard);
//# sourceMappingURL=api-key.guard.js.map