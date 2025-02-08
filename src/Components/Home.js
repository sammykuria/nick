import React from 'react'

function Home() {
  return (
    <div>
      <div className='hompageone'>
        <img src='https://img.freepik.com/premium-photo/teacher-explains-concept-his-students-classroom_14117-1130621.jpg' alt='imagine'></img>
        <div className='homenavtext'>
          <h3>Learn English Online With Proffessional Instructions</h3>
          <p>Your English progress is what matters the most to us.If your not satisfied after 12 weeksof learning you get your money back.</p>
          <button className='btnone'>START NOW</button>
        </div>
      </div>

      <div className='coursesoffered'>
        <div className='offerdcont'>
          <div>
          <h3>COURSES WE OFFER</h3>
          </div>
          <div>
            <button>SEE ALL<i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
        <div className='coursetext'>
          <p>Our team of experienced and certified instructors is committed to helping you achieve fluency and confidence in English.</p>
        </div>

        <div className='grid-container'>
          <div className='card'>
          <img src='https://img.freepik.com/premium-photo/teacher-explains-concept-his-students-classroom_14117-1130621.jpg' alt='imagine'></img>
           <div className='cardtext'>
           <h2>Preparation for Exams</h2>
            <h4>$25</h4>
            <p>Price per lesson</p>
           </div>
          </div>
          <div className='card'>
          <img src='https://img.freepik.com/premium-photo/teacher-explains-concept-his-students-classroom_14117-1130621.jpg' alt='imagine'></img>
          <div className='cardtext'>
          <h2>English For Beginers</h2>
            <h4>$25</h4>
            <p>Price per lesson</p>
           </div>
          </div>
          <div className='card'>
          <img src='https://img.freepik.com/premium-photo/teacher-explains-concept-his-students-classroom_14117-1130621.jpg' alt='imagine'></img>
          <div className='cardtext'>
           <h2>English For Kids</h2>
            <h4>$25</h4>
            <p>Price per lesson</p>
           </div>
          </div>
          {/* <div className='card'>
          <img src='https://img.freepik.com/premium-photo/teacher-explains-concept-his-students-classroom_14117-1130621.jpg' alt='imagine'></img>
           <div className='cardtext'>
           <h2>lorem ipsum</h2>
            <p>lorem ipsum dolor sit amet</p>
           </div> 
          </div> */}
          {/* <div className='card'>
            <h2>lorem ipsum</h2>
            <p>lorem ipsum dolor sit amet</p>
          </div>
          <div className='card'>
            <h2>lorem ipsum</h2>
            <p>lorem ipsum dolor sit amet</p>
          </div>
          <div className='card'>
            <h2>lorem ipsum</h2>
            <p>lorem ipsum dolor sit amet</p>
          </div> */}
        </div>
      </div>


      <div className='homeaboutcont'>
        <div className='haboutimg'>
        <img src='https://img.freepik.com/premium-photo/teacher-explains-concept-his-students-classroom_14117-1130621.jpg' alt='imagine'></img>
        </div>
        <div className='homeabouttext'>
            <p>ABOUT US</p>
            <h3><i class="fa-regular fa-circle-check"></i>We have Expert Instructors,Highly Qualified with Proven Results in their Teaching skills</h3>
            <h3><i class="fa-regular fa-circle-check"></i>We Offer Customised Learning Plans for Every level Tailored to individual needs</h3>
            <h3><i class="fa-regular fa-circle-check"></i>We have Innovative and Engaging Teaching Methods to keep students motivated </h3>
      
        <div className='homeaboutbtn'>
          <button>LEARN MORE</button>
        </div>
        </div>
        
      </div>

      <div className='homementorscont'>
        <div className='homementors'>
          <p>OUR MENTORS</p>
          <h3>They'll Guide You From Day One</h3>
          <h5>bibendum massa vivamus tempor imperdiet posuere elit proin ut dui adipiscing dignissim sagittis, ultrices eu. Adipiscing ante dignissim consequat sit pellentesque laoreet risus magna eu fringilla dolor, tincidunt dictum ultrices. Varius mi scelerisque et, consectetur.</h5>
          <div className='homeaboutbtn'>
          <button><i class="fa-regular fa-circle-check"></i>Discover Mentor</button>
        </div>
        </div>
        <div className='jamaica'>
          <img src='https://t4.ftcdn.net/jpg/09/41/52/17/360_F_941521793_7UHHt5Wo4ro6LUDGU2Uejw2hnqu49zOA.jpg' alt='teacher'></img>
        </div>
      </div>


   

    <div>
    
    </div>

    </div>
  )
}

export default Home
