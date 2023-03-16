import { Controller, Get, UseGuards } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './entity/project.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { UserRoles } from '../user/enums/roles.enum';
import { Public } from '../../common/decorators/public.decorator';

@UseGuards(new RolesGuard())
@ApiTags('project')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  //@Roles(UserRoles.ADMIN)
  @Public()
  @Get()
  async getProject(): Promise<Project[]> {
    return await this.projectService.getProject();
  }
}
