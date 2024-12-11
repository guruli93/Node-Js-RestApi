import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity('kakua')
export class Kakua {
  @ObjectIdColumn()
  id: ObjectId; 

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: new Date() })
  createdAt: Date;
}
