import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import cors from 'cors';

//Importando rutas
import IndexRoutes from './routes';
import BooksRoutes from './routes/books'

// Inicializacionnpm install @handlebars/allow-prototype-access

const app = express();
import './database'; 


// Configuracion del servidor
app.set('port',process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
}));
app.set('view engine','.hbs'); 

// Productos intermedios
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());


// Rutas
app.use('/',IndexRoutes);
app.use('/books',BooksRoutes);

// Para definir archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

// Iniciar servidor
app.listen(app.get('port'),()=>{
    console.log(`Servidor en linea ${app.get('port')}`);
});