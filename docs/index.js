"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
//Importando rutas
const routes_1 = __importDefault(require("./routes"));
const books_1 = __importDefault(require("./routes/books"));
// Inicializacionnpm install @handlebars/allow-prototype-access
const app = express_1.default();
require("./database");
// Configuracion del servidor
app.set('port', process.env.PORT || 4000);
app.set('views', path_1.default.join(__dirname, 'views'));
app.engine('.hbs', express_handlebars_1.default({
    extname: '.hbs',
    layoutsDir: path_1.default.join(app.get('views'), 'layouts'),
    partialsDir: path_1.default.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');
// Productos intermedios
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default());
// Rutas
app.use('/', routes_1.default);
app.use('/books', books_1.default);
// Para definir archivos estaticos
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Iniciar servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en linea ${app.get('port')}`);
});
