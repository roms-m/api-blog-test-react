import { Request, Response } from 'express';
import { getRepository } from "typeorm";
import { Usuario } from '../entity/Usuario';

const bcrypt = require('bcrypt');

export class AuthController{

    static login = async(req: Request, res: Response) => {

        const { username } = req.body;

        if(!(username && req.body.password)){
        	return res.status(404).json({

                message: 'El nombre de usuario y contraseña son requeridos'
            });
        }

        const usuarioRepository = getRepository(Usuario);
        let user: Usuario;
        
        try {
            
            user = await usuarioRepository.findOneOrFail({ 
                where: { 
                    username 
                }
            });
        } catch (error) {
            
		return res.status(404).json({

                message: 'Nombre de usuario o contraseña incorrectos',
                error: error
            });
        }

        try {
            
            const validacion = await bcrypt.compare(req.body.password, user.password);

            if(!validacion){

                return res.status(400).json({
                    message: 'Nombre de usuario o contraseña incorrectos'
                });
            }

            const {password, ...others} = user;
            return res.json(others)
        } catch (error) {
            
            return res.json(error);
        }
    }
}
