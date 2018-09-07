import { BaseEntity, Column, PrimaryGeneratedColumn } from "../../../../src";

import { Entity } from "../../../../src/decorator/entity/Entity";

@Entity()
export class UserLoginToken extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    LoginToken: string;
}
