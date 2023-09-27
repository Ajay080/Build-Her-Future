import React from 'react';
import './AboutMe.css';
import Welcome from '../../Img/welcome-15.gif'
import {AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai'


const AboutMe = () => {
  return (
    <>
    <div className="AboutMe">
      <div className="about-us-cont">
        <div className="gif-container">
            <img src={Welcome} alt="GIF" />
        </div>
        <div className="about-us">
            <p>
            I was dedicated to addressing the underrepresentation of women in the STEM field. Our goal is to create a platform that inspires and supports women to pursue careers and education in science, technology, engineering, and mathematics.
            </p>
            <p>
            Through this website, I aim to provide resources, stories, and opportunities that highlight the achievements and contributions of women in STEM, fostering a community that encourages diversity and inclusivity.
            </p>
        </div>
      </div>
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="how-made">
            <p>
                To create this website addressing the underrepresentation of women in STEM, the process began by defining a clear vision and objectives. A tech stack incorporating React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for the database was selected. The development environment was set up accordingly.
            </p>
            <p>
                Extensive research informed content planning and structure, ensuring alignment with the mission. Designing an intuitive and visually appealing user interface with CSS was crucial. Data storage and management were handled using MongoDB. Rigorous testing, both in the frontend and backend, ensured a robust and error-free website. 
                Deployment on a suitable platform marked the transition to a live website accessible to users. Promotion, user engagement, and continuous measurement of website performance were vital post-launch activities. The iterative approach, guided by user feedback and data insights, remains fundamental to achieving the project's goal of addressing gender disparity in STEM.
            </p>
        </div>
        <h2>What are the outcomes I want to achieve through this website</h2>
    
        <div className="outcome-achieve">
            <h4>Increased Awareness and Education</h4>
            <p>By providing information and resources, individuals become more informed about the issue and its implications, fostering a collective understanding and a desire for change.</p> 
        </div>

        <div className="outcome-achieve">
            <h4>Empowerment and Inspiration</h4>
            <p>Inspire and motivate aspiring female scientists, engineers, and technologists by showcasing success stories, achievements, and opportunities within the STEM community.</p> 
        </div>

        <div className="outcome-achieve">
            <h4>Community Building and Networking</h4>
            <p>Create a space where women can connect, share experiences, offer mentorship, and seek guidance, ultimately fostering a strong and supportive network.</p> 
        </div>

        <div className="outcome-achieve">
            <h4>Diversity and Inclusion</h4>
            <p>Promote a more diverse workforce, ensuring that different perspectives and experiences are represented, which can lead to innovation and better problem-solving in the STEM industry.</p> 
        </div>

        <div className="outcome-achieve">
            <h4>Career Adancement and Opportunities</h4>
            <p>Connect women to job openings, scholarships, grants, internships, and mentorship programs, enabling them to excel in their chosen STEM careers.</p> 
        </div>

        <div className="outcome-achieve">
            <h4>Educational Support and Resources:</h4>
            <p>Offer scholarships, tutorials, workshops, and educational materials that support women throughout their academic journeys in STEM, removing potential barriers to success.</p> 
        </div>

        <div className="outcome-achieve">
            <h4>Long-Term Cultural Change:</h4>
            <p>Inspire a societal shift that embraces gender equality in STEM as a fundamental value, leading to lasting, positive change for generations to come.</p> 
        </div>


      </div>
      <div className="about-author">
        <h2>About the Creator</h2>
        <p>
          I'm Ajay Singh, the creator of this website. As a passionate advocate for gender equality, I initiated this project to contribute to the movement for a more inclusive STEM community. With a strong belief in the power of diversity, I aspire to make a difference by bridging the gender gap and fostering equal opportunities for all.
        </p>
        <div className="social-media">
            <a href="https://www.linkedin.com/in/ajay-singh-1154b41b7/"><AiFillLinkedin /></a>
            <a href="https://www.instagram.com/ajaysinghrathaur_art/"><AiFillInstagram/></a>
            <a href="https://twitter.com/Ajay14788206"><AiFillTwitterCircle/></a>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default AboutMe;
