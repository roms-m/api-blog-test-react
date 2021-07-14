import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Categoria } from './../entity/Categoria';

export class CategoriaController{

    static createCategoria = async(req: Request, res: Response) => {

        const { name } = req.body;
        let categoria = new Categoria();

        try{

            const categoriaRepository = getRepository(Categoria);

            categoria.name = name;
            const newCategoria = await categoriaRepository.save(categoria)

            res.status(201).json(newCategoria);
        }catch(error){

            res.json(error);
        }
    }

    static getAllCategorias = async(req: Request, res: Response) => {

        let categorias;

        try {
            
            const categoriaRepository = getRepository(Categoria);

            categorias = await categoriaRepository.find();

            res.status(200).json(categorias);
        } catch (error) {
            
            res.json(error);
        }
    }
}