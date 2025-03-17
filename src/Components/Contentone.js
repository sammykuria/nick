import React from 'react'
import { Link } from 'react-router-dom'

function Contentone() {
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
        <h1>Online English Exam Preparation</h1>
        <p>Online English exam preparation focuses on developing language skills and strategies needed to succeed in standardized English proficiency tests</p>
      </div>
      <div className='secondshooter'>
        <h3>Key Skills</h3>
        <h5>Effective exam preparation involves mastering the following skills:</h5>
        <p><span>Listening Comprehension:</span> Understanding spoken English in various accents and contexts, including academic lectures and conversations.</p>
        <p><span>Reading Comprehension: </span> Skimming, scanning, and analyzing texts for main ideas, details, and inferences.</p>
        <p><span> Writing Skills:</span> Structuring essays, reports, and summaries with clear arguments, proper grammar, and academic vocabulary.</p>
        <p><span>Time Management:</span>  Answering questions efficiently under timed conditions and practicing test-taking strategies.</p>
        <p><span>Speaking Fluency:</span> Expressing ideas clearly and confidently in interviews, discussions, and structured tasks.</p>
      </div>

      <div className='secondshooter'>
        <h3>Practice & Resources</h3>
        <h5>Online exam preparation relies on various digital tools, including:</h5>
        <p><span>Mock Tests & Practice Questions</span>  – Simulating real exam conditions with platforms like Magoosh, Exam English, and British Council.</p>
        <p><span>AI-Powered Writing & Speaking Feedback</span>  – Improving skills with tools like Grammarly, QuillBot, and ELSA Speak.</p>
        <p><span>Live & Recorded Lessons</span>  – Learning from expert tutors on platforms such as Preply, Cambly, and Coursera.</p>
        <p><span>Self-Paced Study Plans</span>   –Using structured courses and apps like Duolingo English Test and BBC Learning English.</p>
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

export default Contentone
