import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { VehicleEntity } from "./VehicleEntity"

@Entity({name: "users_table"})

export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string // VARCHAR(100)

    @Column()
    email: string

    @Column("integer")
    age: number

    @Column()
    active: boolean

    // @OneToOne(()=> VehicleEntity)
    // @JoinColumn()
    // vehicle: VehicleEntity

    @OneToMany(() => VehicleEntity, (vehicle) => vehicle.usersManyToOne)
    vehiclesOneToMany: VehicleEntity[]

}