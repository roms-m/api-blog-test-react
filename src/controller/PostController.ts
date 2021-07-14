import { Response, Request } from 'express';
import { getRepository } from "typeorm";
import { Post } from '../entity/Post';

export class PostController{

    static createPost = async (req: Request, res: Response) => {

        const { title, brief, content, image, usuarioId, categoriaId } = req.body;
        let post = new Post();

        try {
            
            const postRepository = getRepository(Post);

            post.title = title;
            post.brief = brief;
            post.content = content;
            post.image  = image;
            post.usuario = usuarioId;
            post.categoria = categoriaId;

            const newPost = await postRepository.save(post);

            res.status(201).json(newPost);
        } catch (error) {
            
            res.json(error);
        }
    }

    static getAllPosts = async(req: Request, res: Response) => {

        let posts;

        try {
            
            const postRepository =  getRepository(Post);

            posts = await postRepository.createQueryBuilder("post")
                    .leftJoinAndSelect("post.usuario", "usuario")
                    .leftJoinAndSelect("post.categoria", "categoria")
                    .getMany();
            
            res.status(200).json(posts);
        } catch (error) {
            
            res.json(error);
        }
    }

    static editPost = async(req: Request, res: Response) => {

        const { id } = req.params;
        const{ title, brieft, content, image, categoriaId } = req.body;
        const postRepository = getRepository(Post);
        let post: Post;

        try{


            post = await postRepository.findOneOrFail(id);

            post.title = title;
            post.brief = brieft;
            post.content = content;
            post.image = image;
            post.categoria = categoriaId;

        }catch(error){

            res.json(error);
        }

        const postEditado = await postRepository.save(post);

        res.status(200).json(postEditado);
    }

    static deletePost = async(req: Request, res: Response) => {

        const { id } = req.params;
        const postRepository = getRepository(Post);
        let post: Post;

        try {
            
            post = await postRepository.findOneOrFail(id);

            console.log(post);
            
        } catch (error) {
            
            res.status(404).json({

                message: 'Post no encontrado',
                error: error
            })
        }

        await postRepository.delete(id);

        res.status(200).json({
            
            message: 'Post elimanado'
        })
    }
}