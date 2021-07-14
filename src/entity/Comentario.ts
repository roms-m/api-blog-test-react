import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Post } from './Post';

@Entity()
export class Comentario{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    comment: string;

    @Column()
    email:string;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Post, post => post.comentarios)
    post: Post;
}