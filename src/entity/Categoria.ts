import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Post } from './Post';

@Entity()
export class Categoria{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Post, post => post.categoria)
    posts: Post[];
}