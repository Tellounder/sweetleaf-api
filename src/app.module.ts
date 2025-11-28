import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DesignModule } from './design/design.module';
import { PublishStatusModule } from './publish-status/publish-status.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    DesignModule,
    PublishStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
