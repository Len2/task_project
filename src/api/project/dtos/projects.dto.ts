import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { IsUnique } from '../../../common/decorators/validation.decorator';
import { Column } from 'typeorm';
import { Type } from '../enum/type.enum';

export class CreateProjectDto {
  @Column({ nullable: true })
  url: string;

  @Column()
  name: string;

  @Column({ type: 'enum', nullable: false, enum: Type, default: Type.OTHER })
  type: Type;
}
