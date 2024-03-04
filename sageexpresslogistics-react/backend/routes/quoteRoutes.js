
/**
 * Routing refers to how an application’s endpoints (URIs) respond to client requests.
 * express.Router is a class in the Express.js web application framework that provides
 * a way to create modular, mountable route handlers. It allows you to group route handlers
 * together and apply them to a specific base path, making your code more organized and modular.
 */

import express from 'express';
const router = express.Router();

import {saveQuoteForm} from "../controllers/QuoteController.js";





router.route('/save-quote-form').post(saveQuoteForm);

export default router;