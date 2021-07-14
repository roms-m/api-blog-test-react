import { Router } from 'express';
import { CategoriaController } from '../controller/CategoriaController';

const router = Router();

router.post('/', CategoriaController.createCategoria);

router.get('/', CategoriaController.getAllCategorias);

export default router;