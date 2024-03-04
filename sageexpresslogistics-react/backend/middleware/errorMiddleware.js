export const errorMiddleware = (err, req, res, next)=>{

   // console.error(err.stack)
   //console.log(err.message);
   console.log(err.statusCode);
    let error = {...err};
    error.message = err.message;

    //Handling Mongoose Validation Error

    if(err.name==='ValidationError'){
        const message = Object.values(err.errors).map(value => value.message);
        //built-in Error Constructor available in js. Here we pass Error() object in   
        error = new Error(message)

    }

    // Send the error response
    res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || 'Internal Server Error',
      });

}


/**
 * Define error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three: (err, req, res, next). 
 * You define error-handling middleware last, after other app.use() and routes calls;
 * 
 */

/**
 * An Express application is essentially a series of middleware function calls.
 * We define a set of middleware functions and attach them as a stack to one or more route handler functions. 
 * We call the next middleware function by calling the next() function.
 */