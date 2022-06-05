import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../user/entity/user.entity";

@Entity({ synchronize: true })
export class Memo {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  emotion: number;

  @Column()
  content: string;

  @ManyToOne(() => User, (user) => user.memo, { nullable: true })
  user: User;
}
