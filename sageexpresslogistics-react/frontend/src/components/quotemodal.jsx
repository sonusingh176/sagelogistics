import React from "react";
import { useState ,useEffect } from "react";
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const quotemodal = () => {

    const [formData , setFormData] = useState({
        user_name:'',
        user_email:'',
        user_phone:'',
        user_city:'',
        courier_type:''

    });

    const handleSubmit =async (e)=>{
        e.preventDefault();

        try {
            
            const res = await axios.post('http://localhost:8000/v1/save-quote-form',formData);
            toast.success(res.data.message);
        } catch (error) {
            toast.error("An error occured. please try again");
            
        }

    }

    const handleChange=(e)=>{

        const {name ,value}= e.target;
        console.log(name,value);
        setFormData((prevFormData)=>({...prevFormData,[name]:value}))

    }



  return (
   
    // <!-- ======= Contact Modal Section ======= -->
    <div className="modal fade quat-form" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog">
   
           <div className="modal-content">
   
               <div className="modal-header">
                   <span>
                   <h5 className="modal-title text-light">Contact Us</h5>
                   <p className="text-light">We’ll get in touch with you</p>
                   </span>
                   
                   <button type="button" className="btn btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
           
               <div className="modal-body">
   
                   <div className="text-wrap d-flex justify-content-center">
                       <span className="text-danger fw-bold">\\ &nbsp; &nbsp;</span>
                       <h4 className="text-center fw-bold text-light">REQUEST A QUICK QUOTE</h4>
                       <span className="text-danger fw-bold">&nbsp; &nbsp;\\</span>
                   </div>
               
                
                   <form  className="quoteform" onSubmit={handleSubmit}>
                     
                       <div style={{height: "460px"}}>
                           
                           <div className="row">
   
                               <div className="col-lg-6 mb-3 py-3 pb-2">                      
                                   <input type="text" name="user_name" className="form-control p-2" id="user_name" value={formData.user_name} onChange={handleChange} placeholder="Your Name" required/>
                               </div>
   
                               <div className="col-lg-6 mb-3 py-3 pb-2">                      
                                   <input type="email" className="form-control p-2" name="user_email" id="user_email" value={formData.user_email} onChange={handleChange} placeholder="Your Email" required/>
                               </div>
   
                           </div>
                           
                           <div className="mb-3 py-2 pb-2">                      
                               <input type="text" name="user_phone" className="form-control p-2" id="user_phone" value={formData.user_phone} onChange={handleChange} placeholder="Phone Number" required/>
                           </div>
   
                           <div className="mb-3 py-2 pb-2">                      
                               <input type="city" className="form-control p-2" name="user_city" id="user_city" value={formData.user_city} onChange={handleChange} placeholder="City" required/>
                           </div>
           
                           <div className="mb-3 mt-3 py-2   pb-2">
                               <input type="text" className="form-control p-2" name="courier_type" id="courier_type" value={formData.courier_type} onChange={handleChange} placeholder="Courier Type" required/>
                           </div>
           
                           <div className="text-center">
                               <button type="submit" className="btn btn-success modal-submit-btn rounded-0 submitQuotebtn">Submit</button>
                           </div>
                       </div>    
                   </form>
              
               </div>
   
           </div>
       
       </div>
       
   </div>
  )
}

export default quotemodal