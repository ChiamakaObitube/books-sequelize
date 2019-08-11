import { Router } from 'express';
import BookController from '../controllers/BookController';

const router = Router();

router.get('/book', BookController.getAllBooks);
router.post('/book', BookController.addBook);
router.get('/book/:id', BookController.getABook);
router.put('/book/:id', BookController.updatedBook);
router.delete('/book/:id', BookController.deleteBook);

export default router;

