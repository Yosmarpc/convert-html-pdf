import Router from 'express';
import routerPdf from './routerPdf.js';

const router = Router();

router.use("/v1", routerPdf);


export default router;

