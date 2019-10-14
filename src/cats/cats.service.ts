import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
//import { CatsService } from './cats.service';
import { Cats } from '../database/entities/cats.entity';
@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cats)
    private catRepository: Repository<Cats>,
  ) {}

  async create(cat: Cats): Promise<Cats> {
    console.log('service cats');
    console.log(cat);
    return await this.catRepository.save(cat);
  }
  async findAll(): Promise<Cats[]> {
    return await this.catRepository.find();
  }

  async findOne(id: string): Promise<Cats | undefined> {
    console.log('User Service ' + id);
    return await this.catRepository
      .createQueryBuilder('user')
      .where('user.id=:id', { id })
      .getOne();
  }
  async deleteOne(id: string): Promise<Cats | undefined> {
    console.log('Delete Service ' + id);
    let selectedCat = await this.catRepository.findOne(id);
    return await this.catRepository.remove(selectedCat);
  }
  async updateOne(id, name): Promise<Cats> {
    let selectedCat = await this.catRepository.findOne(id);
    selectedCat.firstName = name;
    return await this.catRepository.save(selectedCat);
  }
}
