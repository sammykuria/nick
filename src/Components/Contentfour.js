import React from 'react'
import { Link } from 'react-router-dom'
function CourseContent() {
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
        <h1>Online English Group Learning</h1>
        <p>Online English group learning provides an interactive and collaborative environment for students to improve their language skills through virtual classes</p>
      </div>
      <div className='secondshooter'>
        <h3>Key Skills</h3>
        <h5>Group learning in an online setting helps students develop essential language skills, including:</h5>
        <p><span>Speaking & Pronunciation:</span>Practicing fluency through discussions, debates, and role-playing activities.</p>
        <p><span>Listening Comprehension:</span>Understanding different accents, tones, and speaking styles in group conversations.</p>
        <p><span>Collaboration & Teamwork: </span>Engaging in group exercises, problem-solving activities, and project-based learning.</p>
        <p><span>Grammar & Vocabulary:</span>  Expanding knowledge through interactive lessons and peer-corrected exercises.</p>
      </div>

      <div className='secondshooter'>
        <h3>Practice & Resources</h3>
        <h5>Online group learning uses a variety of tools and methods to enhance engagement and learning outcomes:</h5>
        <p><span>Live Virtual Classes</span> – Interactive sessions on platforms like Zoom, Microsoft Teams, and Google Meet.</p>
        <p><span>Group Discussions & Peer Learning</span> – Practicing English through structured conversations and debates.</p>
        <p><span>Gamified Learning & Activities</span> – Using platforms like Kahoot, Quizlet, and BBC Learning English to reinforce vocabulary and grammar.</p>
        <p><span>Collaborative Writing & Projects </span>– Working on shared documents and presentations via Google Docs, Padlet, and Trello.</p>
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

export default CourseContent
