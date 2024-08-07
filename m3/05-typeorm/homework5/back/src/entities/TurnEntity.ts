import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity({name: "turns_table"})

export class TurnEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  time: Date;
  
  @Column()
  status: string;

  @ManyToOne(() => UserEntity, (user) => user.turnsIds)
  userId: UserEntity
}
