import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('feed_post')
export class FeedPostEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({name: 'body', type:String})
  @Column({ default: '' })
  body: string;
  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

}
