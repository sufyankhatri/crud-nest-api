import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'user',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
