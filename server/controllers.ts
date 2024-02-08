import { Request, Response } from 'express';

export const totalPropinas = (req: Request, res: Response) => {
    res.send('Monto total de propinas capturado correctamente');
};

export const dividirPropinas = (req: Request, res: Response) => {
    res.send('Propinas divididas correctamente entre los empleados');
};


export const registrarPago = (req: Request, res: Response) => {
    res.send('Pago de propinas registrado correctamente');
};