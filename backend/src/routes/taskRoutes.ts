import express from 'express';
import * as TaskController from '../controllers/taskController';

const router = express.Router();

router.get('/', TaskController.getTasks);
router.post('/', TaskController.createTask);
router.put('/:id/complete', TaskController.markTaskAsCompleted);

export default router;