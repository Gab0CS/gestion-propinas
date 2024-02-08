import express, { Request, Response } from 'express';
import { totalPropinas, dividirPropinas, registrarPago } from './controllers';

const router = express.Router();

router.post('/tips/total', (req: Request, res: Response) => {
    totalPropinas(req, res);
});

router.post('/tips/split', (req: Request, res: Response) => {
    dividirPropinas(req, res);
});

router.post('/tips/payment', (req: Request, res: Response) => {
    registrarPago(req, res);
});

export default router;