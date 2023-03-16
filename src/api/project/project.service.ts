import { Injectable } from '@nestjs/common';
import { ProjectRepository } from './repository/project.repository';
import { Project } from './entity/project.entity';

@Injectable()
export class ProjectService {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async getProject(): Promise<Project[]> {
    return await this.projectRepository.getProject();
  }
}
