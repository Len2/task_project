import { InternalServerErrorException } from '@nestjs/common';
import { CustomRepository } from '../../../common/db/decorators/CustomRepository.decorator';
import { Project } from '../entity/project.entity';
import { IProjectRepository } from '../interfaces/project.interface';
import { BaseCustomRepository } from '../../../common/db/customBaseRepository/BaseCustomRepository';
import { FindManyOptions, FindOneOptions } from 'typeorm';

@CustomRepository(Project)
export class ProjectRepository
  extends BaseCustomRepository<Project>
  implements IProjectRepository
{
  async getProject(): Promise<Project[]> {
    return await this.find();
  }
}
