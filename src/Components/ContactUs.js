import React from 'react'

function ContactUs() {
  return (
    <div>
     <p className='callme'>Contact Us</p>

        <div className='diddyparty'>
            <div className='formcontainer'>
                <form action='/submit' method='post'>
                    <div class="form-group">
                        <label for='name'>Name</label>
                        <input type='text' name='name' placeholder='Your name' id='name'></input>
                    </div>
                    <div class="form-group">
                        <label for='email'>Email</label>
                        <input type='email' name='email' placeholder='Your email' id='email'></input>
                    </div>
                    <div class="form-group">
                        <label for='message'>Message</label>
                        <input className='messageme' type='message' name='message' placeholder='Your message' id='message'></input>
                    </div>
                    <div class="form-group">
                    <input className='submit' type='submit' value='Submit'></input>
                    </div>
                </form>
            </div>

            <div className='diddyafterparty'>
                <div className='diddytextarea'>
                <h3>Get In Touch</h3>
                {/* <p>Whether you have questions about our programs, need help with the admissions process, or simply want to learn more about what makes our university unique, our team is here to help.</p> */}
                </div>

                <div className='diddylokeshen'>
                    <p>123B, West Lexington Avenue ,Baltimore USA</p>
                    <p>(301) 555-6734</p>
                    <p>no reply@gmail.com</p>
                </div>

                <div className='diddysocials'>
                    <p>face</p>
                    <p>exee</p>
                    <p>insta</p>
                    <p>ytube</p> 
                </div>
               
            </div>
        </div>
            
    </div>
  )
}

export default ContactUs
