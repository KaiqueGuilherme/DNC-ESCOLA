import express  from "express";
import recebendo_email from "../Controllers/Emails";


const routerReceber = express.Router();

routerReceber.get('/recebendo_emails', recebendo_email);

    
export default routerReceber;