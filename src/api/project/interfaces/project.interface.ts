import { Project } from '../entity/project.entity';
import { IBaseCustomRepository } from '../../../common/db/customBaseRepository/interfaces/BaseCustomRepository.interface';
import { CreateProjectDto } from '../dtos/projects.dto';

export interface IProjectRepository extends IBaseCustomRepository<Project> {
  getProject(): Promise<Project[]>;
  saveProject(project: CreateProjectDto);
}
