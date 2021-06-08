import {Request,Response} from 'express';

class IndexController {

    public index (req:Request,res:Response) {
        res.render('index',{title: 'Bienvenido a la app'});
    }

}

export const indexController = new IndexController();
