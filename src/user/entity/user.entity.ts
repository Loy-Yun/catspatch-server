import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Memo } from "../../memo/entity/memo.entity";

@Entity({ synchronize: true })
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  push_time: Date;

  @OneToMany(() => Memo, (memo) => memo.user, { nullable: true })
  memo: Memo[];
}
