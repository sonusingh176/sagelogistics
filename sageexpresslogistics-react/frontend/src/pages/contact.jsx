import Breadcrumbs from "../components/breadcrumbs"

const contact = () => {
  return (
    
   
        <main id="main">
            {/* Pass props to the child component */}
            <Breadcrumbs bcontent={{page:'Contact' ,title : 'Contact', description : ''}}/>

             {/* Contact Section  */}
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
        
                <div>             
                <iframe style={{border:0, width: '100%', height: '340px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24763.347040529512!2d75.90826124411439!3d22.687560716996266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e36a4d032319%3A0x19f7e39b5ced7462!2s75%2C%20Vyapar%20Vikas%20Parishad%20Bypass%20Rd%2C%20Dudhia%2C%20Deoguradia%2C%20Madhya%20Pradesh%20452016!5e0!3m2!1sen!2sin!4v1707375804306!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
                </div>
                
        
                <div className="row gy-4 mt-4">
        
                    <div className="col-lg-4">
        
                    <div className="info-item d-flex">
                        <i className="bi bi-geo-alt flex-shrink-0"></i>
                        <div>
                        <h4>Location:</h4>
                        <p>Plot 75 NO, Vyapar Vikas Parishad,Devguradia ,Indore</p>
                        </div>
                    </div>
                    
        
                    <div className="info-item d-flex">
                        <i className="bi bi-envelope flex-shrink-0"></i>
                        <div>
                        <h4>Email:</h4>
                        <p>sageexpresslogistics@gmail.com</p>
                        </div>
                    </div>
                    
        
                    <div className="info-item d-flex">
                        <i className="bi bi-phone flex-shrink-0"></i>
                        <div>
                        <h4>Call:</h4>
                        <p>+91 9302889535</p>
                        </div>
                    </div>
                        
                    </div>
        
                    <div className="col-lg-8">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                        <div className="col-md-6 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                        </div>
                        </div>
                        <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                        </div>
                        <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                    </div>
                    
        
                </div>
        
                </div>
            </section>
        
        </main>
    
  )
}

export default contact