import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Memo } from "../../memo/entity/memo.entity";

@Entity({ synchronize: false })
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expo_token: string;

  @Column()
  push_time: string;

  @OneToMany(() => Memo, (memo) => memo.user, { nullable: true })
  memo: Memo[];

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  public created_at: Date;
}
