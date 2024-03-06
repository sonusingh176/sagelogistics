import {QuoteForm} from '../models/Quote/QuoteForm.js';

export const saveQuoteForm= async function(req,res,next){

   
   try {
    await QuoteForm.create(req.body);
    res.json({
        status:'200',
        message:'Thank you, we will get back to you soon'
    })
    
   } catch (error) {
    //When we get an error in the application, the error object is passed to the error-handling middleware, by calling the next(error) function
    
     // Set statusCode property
    error.statusCode = 400;
    // calling next error handling middleware
    next(error);   
   }

}


