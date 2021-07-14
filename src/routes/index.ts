import { Router } from 'express';
import usuario from './usuario.routes';
import auth from './auth.routes';
import categoria from './categoria.routes';
import post from './post.routes';
import comentario from './comentario.routes';

const router = Router();

router.use('/users', usuario)
router.use('/auth', auth);
router.use('/categorias', categoria);
router.use('/posts', post);
router.use('/comentarios', comentario);

export default router;