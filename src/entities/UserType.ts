import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { v4 as uuid } from 'uuid';

@Entity('userType')
class UserType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;
}

export default UserType;
