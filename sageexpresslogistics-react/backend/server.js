import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './config/dbconnection.js';
import quoteRouter from './routes/quoteRoutes.js';
import cors from 'cors';
import {errorMiddleware} from './middleware/errorMiddleware.js';

import * as dotenv from 'dotenv';
dotenv.config()
const app = express();
connectDB();

app.use(cors({origin:'http://localhost:5173'}));


app.use(bodyParser.json());// global middleware


app.use('/v1',quoteRouter);

//attach  error-handling middleware at last, after other app.use() and routes handlers;
app.use(errorMiddleware);

app.listen(process.env.SERVER_PORT,function(){
    console.log(`Server listening on port ${process.env.SERVER_PORT}`);
});

/**
 *  the body-parser middleware in your Express application. However, as of Express version 4.16.0, the express.json() middleware is included by default, and you no longer need to use body-parser for JSON parsing.
 * 
 */