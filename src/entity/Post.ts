import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Categoria } from './Categoria';
import { Comentario } from './Comentario';
import { Usuario } from './Usuario';

@Entity()
export class Post{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    brief: string;

    @Column('text')
    content: string;

    @Column()
    image: string;

    @Column()
    @CreateDateColumn()
    createdAt: string;

    @Column()
    @UpdateDateColumn()
    updatedAt: string;

    @ManyToOne(() => Usuario, usuario => usuario.posts)
    usuario: Usuario;

    @ManyToOne(() => Categoria, categoria => categoria.posts)
    categoria: Categoria;

    @OneToMany(() => Comentario, comentario => comentario.post)
    comentarios: Comentario[];
}