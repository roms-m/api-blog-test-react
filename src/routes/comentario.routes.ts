import { Router } from 'express';
import { ComentarioController } from '../controller/ComentarioController';

const router = Router();

router.post('/', ComentarioController.createComentario);

router.get('/:id', ComentarioController.getAllComments);

router.delete('/:id', ComentarioController.deleteComment);

export default router;