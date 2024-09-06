import { Column, Entity, PrimaryColumn } from "typeorm";

const { nanoid } = require('nanoid')

@Entity('developers')
export class Developer {

    @PrimaryColumn()
    id: string; //dev_09da02

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    dateOfBirth: string;

    generateId() {
    this.id = `dev_${nanoid()}`;
    }

}
