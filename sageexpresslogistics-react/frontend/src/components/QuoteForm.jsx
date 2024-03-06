import React from 'react';
import { useState , useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


const QuoteForm = () => {

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_city: '',
    courier_type: ''
  });

  const handleSubmit =async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post('http://localhost:8000/v1/save-quote-form', formData);
      console.log(res.data.message);
      toast.success(res.data.message);
      
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    }

  }


  const handleChange=(e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevFormData)=> ({...prevFormData, [name]:value}))
  
  }


  return (
   
    <div className="quat-form" style={{backgroundColor: "#222f4d" , borderRadius: "6px", boxShadow: "0 0 20px 3px rgba(0, 0, 0, 0.05)"}}>
  
      <div className="tab" style={{padding: "2rem"}}>
        <h2 style={{color: "white", fontSize: "2.6rem"}}>Get a <span className="text-warning">Quote Now!</span></h2>
        <div className="tab_content">
          <div className="tabs_item">
            <p style={{marginBottom:"20px" ,color:"#ffff"}}>Fill out thsdsdfe form and we will get back to you with a personalized quote.</p>
     
            <form  className="quoteform" onSubmit={handleSubmit}>
             
              <div style={{height:"auto"}}/>
                  
                  <div className="mb-3 mt-4 py-2 pb-2">                      
                      <input type="text"  className="form-control p-2" name="user_name" value={formData.user_name} onChange={handleChange} id="user_name" placeholder="Your Name" />
                      
                  </div>
    
                  <div className="mb-3 py-2 pb-2">                      
                      <input type="email" className="form-control p-2" name="user_email" value={formData.user_email} onChange={handleChange}  id="user_email" placeholder="Your Email" required/>
                  </div>
    
                  <div className="mb-3 py-2 pb-2">                      
                      <input type="text"  className="form-control p-2" name="user_phone" value={formData.user_phone} onChange={handleChange}  id="user_phone" placeholder="Phone Number" required/>
                  </div>
    
                  <div className="mb-3 py-2 pb-2">                      
                      <input type="city" className="form-control p-2" name="user_city" value={formData.user_city} onChange={handleChange}  id="user_city" placeholder="City" required/>
                  </div>
    
                <div className="mb-3 mt-3 py-2   pb-2">
                  <input type="text" className="form-control p-2" name="courier_type" value={formData.courier_type} onChange={handleChange}  id="courier_type" placeholder="Courier Type" required/>
                </div>
    
              <div className="text-center">
                <button type="submit" className="btn btn-success modal-submit-btn rounded-0 submitQuotebtn">Submit</button></div>
            </form>

            <ToastContainer />

          </div>
        </div>
      </div>
                    
</div>


  )
}

export default QuoteForm