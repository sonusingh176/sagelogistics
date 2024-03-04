//Defining your schema here.
import mongoose from "mongoose";
const {Schema} =mongoose;

const QuoteFormSchema =new Schema({

    user_name:{
        type:String,
        required:[true,"Please Provide a Name"],

    },
    user_email:{
        type:String,
        required:[true,"Please provide the Email"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        
    },
    user_phone:{
        type:String,
        required:[true,"Please Provide Phone Number"],
        minLength:[10,"Mobile number must be at least 10 digits"],
        maxLength:[10,'Mobile number must be at least 10 digits']
        
    },
    user_city:{
        type:String,
        required:[true,"Please Provide City"],
        
    },
    courier_type:{
        type:String,
        required:[true,"Please Provide courier Type"],
        
    },


});

const QuoteForm =mongoose.model('Quote_Form',QuoteFormSchema);

export {QuoteForm};

/**
 * Models are fancy constructors compiled from Schema definitions.An instance of a model is called a document. 
 * Models are responsible for creating and reading documents from the underlying MongoDB database.
 */