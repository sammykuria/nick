import React from 'react'
import { Link } from 'react-router-dom'
function Contentthree() {
  return (
    <div>
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
        <h1>English For Children</h1>
        <p>Online English learning for kids has become more interactive and engaging with the help of modern technology. Here are some key points about it:</p>
      </div>
      <div className='secondshooter'>
        <h3> Fun & Interactive Learning</h3>
        <h5>it includes skills like</h5>
        <p><span>Presentations:</span> Delivering clear and concise information to an audience</p>
        <h3>Popular Online Platforms</h3>
        <p><span>Duolingo Kids:</span> Delivering clear and concise information to an audience</p>
        <p><span>Emails and Report Writing:</span> Delivering clear and concise information to an audience</p>
        <p><span>Small Talk and Networking:</span> Delivering clear and concise information to an audience</p>
      </div>
      <div>
        <h3>Parental Involvement</h3>
        <p>Parents can track progress through dashboards and reports.</p>
        <p>Some platforms provide homework and worksheets for extra practice.</p>
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
    </div>
  )
}

export default Contentthree
