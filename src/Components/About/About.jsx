import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt='' className='about-img'/>
        <img src={play_icon} alt='' className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Our Mission</h2>
        <p>NSBM Green University is the first ever green university in South Asia and sets an example for the whole South Asia by paving the way for environmental sustainability. The university is open for both national and international student community and it has turned a new chapter in Sri Lankan higher education.
            </p>
        <p>NSBM Green University operates as a self-financed university and is renowned for its world-class academic offerings. This state-of-the-art university offers nationally and internationally recognized, UGC-approved degree programmes and foreign degree programmes in five faculties: Business, Computing, Engineering, Science, and Postgraduate Studies.
            </p>
        <p>The university is spread over an area of 40 acres and the massive university complex was built with the intention of providing an opportunity for both national and international students to have a fully-fledged education in Sri Lanka. Currently, more than 12,000 students are studying at the university and the highly qualified local and foreign lecturers who teach at the university are committed to preparing these undergraduates to face any challenge the world has to offer. The university’s commitment to excellence in education extends beyond course delivery since the university has created mutually beneficial relationships with the industry to provide students with opportunities to get exposure to the real- world workplaces.
            </p>
      </div>
    </div>
  )
}

export default About
