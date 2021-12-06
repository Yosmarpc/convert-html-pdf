import { Router } from "express";
import { convertHtmlPdf, pruebaGet } from "../controller/convertPdf.js";

const routerPdf = Router();
routerPdf.get("/convert-html-pdf/", convertHtmlPdf);

routerPdf.get("/prueba", pruebaGet);


export default routerPdf;
