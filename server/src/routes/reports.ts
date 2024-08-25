import { Router } from 'express';
import { getBalanceSheet } from '../controllers';

const router = Router();

router.get('/reports/balance-sheet', getBalanceSheet);

export default router;
