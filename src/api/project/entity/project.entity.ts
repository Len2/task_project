import { User } from '../../user/entities/user.entity';
import { Entity, OneToMany, Column, JoinTable, ManyToMany } from 'typeorm';
import { AuditEntity } from '../../../common/db/customBaseEntites/AuditEntity';
import { Type } from '../enum/type.enum';

@Entity('projects')
export class Project extends AuditEntity {
  @Column({ nullable: true })
  url: string;

  @Column()
  name: string;

  @Column({ type: 'enum', nullable: false, enum: Type, default: Type.OTHER })
  type: Type;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];
}
