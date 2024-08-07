import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { TurnEntity } from "./TurnEntity";
import { CredentialEntity } from "./CredentialEntity";

@Entity({ name: "users_table" })
// @Unique(["email"])

export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  email: string;

  @Column({ type: "date" })
  birthdate: Date;

  @Column()
  nDni: number;

  @Column()
  credentialsID?: number;
  // @OneToOne(() => CredentialEntity)
  // @JoinColumn()
  // credentialsID: CredentialEntity;

  @OneToMany(() => TurnEntity, (turnParam) => turnParam.userId)
  turnsIds: TurnEntity[];
}
