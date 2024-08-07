import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { UserEntity } from "./UserEntity"

@Entity({name: "vehicles_table"})

export class VehicleEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    brand: string 

    @Column()
    color: string

    @Column()
    model: string

    @Column()
    year: number

    @ManyToOne(() => UserEntity, (user) => user.vehiclesOneToMany)
    usersManyToOne: UserEntity
}