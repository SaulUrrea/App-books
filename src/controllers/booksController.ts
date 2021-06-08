import {Request,Response} from 'express';
import  Bookmodel, {Book} from '../models/Book';

class BooksController {

    public async index(req:Request,res:Response): Promise<void> {
        const books: Book[] = await Bookmodel.find({}).lean();
        res.render('books/index',{
            title: 'Libros',
            books
        });
    }

    public renderBook (req:Request,res:Response): void {
        res.render('books/add',{
            title: 'Agregar libro'
        });
    }

    public async saveBook(req:Request,res:Response) {
        const {title,author,isbn} = req.body;
        const book:Book = new Bookmodel({title,author,isbn});
        await book.save();
        res.redirect('/books');
    }

}

export const booksController = new BooksController();
