import { getRepository } from "typeorm";
import { Request, Response } from 'express';
import { Usuario } from './../entity/Usuario';
const bcrypt = require('bcrypt');

class UsuarioController{

    static createUser = async(req: Request, res: Response) => {

        const { name, username, email, password, image } = req. body;
        const usuario = new Usuario();
        
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPass = await bcrypt.hash(password, salt);

            const usuarioRepository = getRepository(Usuario);
            usuario.name = name;
            usuario.username = username;
            usuario.email = email;
            usuario.password = hashedPass;
            usuario.image = image

            const nuevoUsuario = await usuarioRepository.save(usuario);

            res.status(201).json(nuevoUsuario);
        } catch (error) {
            
            res.json(error);
        }
    }

    static getAllUsers = async(req:Request, res:Response) => {

        try {
            let usuarios;

            const usuarioRepository = getRepository(Usuario);

            usuarios = await usuarioRepository.find();

            res.status(200).json(usuarios);
        } catch (error) {
            
            res.json(error)
        }
    }
}

export default UsuarioController;