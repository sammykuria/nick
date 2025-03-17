import React from 'react'
import { Link } from 'react-router-dom'

function Contenttwo() {
  return (
    <div>
    <Link className='gobacklink' to={'/courses/'}>
   <div className='goback'>
   <i class="fa-solid fa-arrow-left"></i>
   <div className='backk'>
   <p>go back</p>
   </div>
   </div>
   </Link>

    <div className='shooter'>
   <div className='shootercontainer'>
   <div className='firstshooter'>
     <h1>Business English</h1>
     <p>encompasses the language skills and vocabulary used in professional settings, including presentations, meetings, emails, and report writing, emphasizing formal communication and industry-specific terminology</p>
   </div>
   <div className='secondshooter'>
     <h3>Key Skills</h3>
     <h5>it includes skills like</h5>
     <p><span>Presentations:</span> Delivering clear and concise information to an audience</p>
     <p><span>Negotiation:</span> Delivering clear and concise information to an audience</p>
     <p><span>Meetings:</span> Delivering clear and concise information to an audience</p>
     <p><span>Emails and Report Writing:</span> Delivering clear and concise information to an audience</p>
     <p><span>Small Talk and Networking:</span> Delivering clear and concise information to an audience</p>
   </div>
   <div className='secondshooter'>
     <h3 >Formal Writing</h3>
     <p>Business English emphasizes using formal vocabulary and avoiding slang or colloquial language.</p>
   </div>
   </div>

   <div  className='formyangu'>
     <h2>Jaza Form</h2>
     <div>
<div class="form-container">
   <div class="logo-container">
     Forgot Password
   </div>

   <form class="form">
     <div class="form-group">
       <label for="email">Email</label>
       <input type="text" id="email" name="email" placeholder="Enter your email" required=""/>
     </div>

     <button class="form-submit-btn" type="submit">Send Email</button>
   </form>

 </div>
     </div>
   </div>
 </div>
 </div>
  )
}

export default Contenttwo
