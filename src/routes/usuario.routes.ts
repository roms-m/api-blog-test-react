import { Router } from 'express'
import UsuarioController from "../controller/UsuarioController";

const router = Router();

router.post('/', UsuarioController.createUser);

router.get('/', UsuarioController.getAllUsers);

export default router;