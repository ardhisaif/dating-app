import { Router } from 'express';
import user from './user.router';

const router = Router();

router.use('/user', user);
router.get('/test', (req, res) => {
  res.send('sudah masuk');
});

export default router;