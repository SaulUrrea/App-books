"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const booksController_1 = require("../controllers/booksController");
router.get('/', booksController_1.booksController.index);
router.get('/add', booksController_1.booksController.renderBook);
router.post('/add', booksController_1.booksController.saveBook);
exports.default = router;
