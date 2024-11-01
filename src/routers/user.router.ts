import express from 'express';
import user from '../controllers/user.controller';

const router = express.Router();

router.get('/:user_id', user.getUserByID);

export default router;