import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class ApiKeyGuard implements CanActivate {
    private readonly configService;
    private readonly apiKey;
    constructor(configService: ConfigService);
    canActivate(context: ExecutionContext): boolean;
}
