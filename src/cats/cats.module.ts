import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
//import { ContactsController } from './contacts/contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cats } from '../database/entities/cats.entity';
import { CatsController } from './cats.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cats])],
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatsModule {}
