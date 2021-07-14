import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
import { Post } from "./Post";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    image: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Post, post => post.usuario)
    posts: Post[];

}
