import { Router } from 'express';
import { PostController } from '../controller/PostController';

const router = Router();

router.post('/', PostController.createPost);

router.get('/', PostController.getAllPosts);

router.put('/:id', PostController.editPost);

router.delete('/:id', PostController.deletePost);

export default router;