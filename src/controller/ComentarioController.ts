import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Comentario } from '../entity/Comentario';

export class ComentarioController{

    static createComentario = async(req: Request, res: Response ) => {

        const { name, comment, email, postId} = req.body;
        let comentario = new Comentario();

        try {
            
            const comentarioRepository = getRepository(Comentario);

            comentario.name = name;
            comentario.comment = comment;
            comentario.email = email;
            comentario.post = postId;

            const newComentario = await comentarioRepository.save(comentario);

            res.status(201).json(newComentario);
        } catch (error) {
            
            res.json(error);
        }
    }

    static getAllComments = async(req: Request, res: Response) => {

        const postId = req.params.id;
        console.log(postId);
        
        let comentarios;

        try {
            
            const comentarioRepository = getRepository(Comentario);

            comentarios = await comentarioRepository.createQueryBuilder("comentario")
                                .where("comentario.post = :postId", { postId: postId})
                                .getMany();
            
            res.status(200).json(comentarios);
        } catch (error) {
            
            res.json(error);
        }

    }

    static deleteComment = async(req: Request, res: Response) => {

        const { id } = req.params;
        const comentarioRepository = getRepository(Comentario);
        let comentario: Comentario;

        try {
            
            
            comentario = await comentarioRepository.findOneOrFail(id);
        } catch (error) {
            
            res.json(error)
        }

        await comentarioRepository.delete(id);

        res.status(200).json({

            message: 'Comentario elimnado'
        });

    }
}