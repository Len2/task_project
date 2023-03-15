import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/role.dto';
import { UpdateRoleDto } from './dto/role.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PaginationInterceptor } from '../../common/interceptors/pagination.interceptor';

@UseGuards(new RolesGuard())
@ApiBearerAuth()
@ApiTags('Roles')
@Controller('api/roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Roles('admin')
  @Post()
  async create(@Body() data: CreateRoleDto) {
    return await this.roleService.create(data);
  }

  @Roles('admin')
  @UseInterceptors(PaginationInterceptor)
  @Get()
  async findAll() {
    return await this.roleService.findAll();
  }

  @Get(':id')
  @Roles('admin', 'radiologist', 'dispatcher')
  async findOne(@Param('id') id: string) {
    return await this.roleService.findOne(id);
  }
  @Roles('admin')
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdateRoleDto) {
    return await this.roleService.update(id, data);
  }

  @Roles('admin')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.roleService.remove(id);
  }
}
