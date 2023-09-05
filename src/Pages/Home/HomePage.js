import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';
import home_img1 from "../../Img/home_img1.svg"
import home_img2 from "../../Img/home_img2.svg"
import home_img3 from "../../Img/home_img3.svg"
import home_img4 from "../../Img/home_img4.svg"
import home_img5 from "../../Img/home_img5.svg"
import home_img6 from "../../Img/home_img6.svg"
import home_img7 from "../../Img/home_img7.svg"
import home_img8 from "../../Img/home_img8.svg"
import home_img9 from "../../Img/home_img9.svg"
import home_img10 from "../../Img/home_img10.svg"
import home_img11 from "../../Img/home_img11.svg"
import home_img12 from "../../Img/home_img12.svg"
import home_img13 from "../../Img/home_img13.svg"
import home_img14 from "../../Img/home_img14.svg"
import home_img15 from "../../Img/home_img15.svg"
import slide1 from "../../Img/Slide1.png"
import slide2 from "../../Img/Slide2.png"
import slide3 from "../../Img/Slide3.png"

const HomePage = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
  };

  return (
    <div>
      <header className="header">
        <Slider {...sliderSettings}>
          <div className="slide">
            {/* <div className="slide-content"> */}
              {/* <div className="quote">"Empowerment is not a buzzword, it's a guiding principle."</div> */}
              {/* <div className="slide-image"> */}
                <img src={slide1} alt="Successful Woman" />
              {/* </div> */}
            {/* </div> */}
          </div>
          <div className="slide">
            {/* <div className="slide-content"> */}
              {/* <div className="quote">"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."</div> */}
              {/* <div className="slide-image"> */}
                <img src={slide2} alt="Successful Woman" />
              {/* </div> */}
            {/* </div> */}
          </div>
          <div className="slide">
            {/* <div className="slide-content"> */}
              {/* <div className="quote">"The future belongs to those who believe in the beauty of their dreams."</div> */}
              {/* <div className="slide-image"> */}
                <img src={slide3} alt="Successful Woman" />
              {/* </div> */}
            {/* </div> */}
          </div>
        </Slider>
      </header>
      <div className="home_title">
        <p>
        The underrepresentation of women in STEM (Science, 
        Technology, Engineering, and Mathematics) is a
        pressing concern backed by data. Globally, women 
        constitute just about 35% of STEM students. In 
        professional realms, the gender gap persists with
        a mere 12% of engineering and computer science roles
        being held by women. Leadership positions fare no
        better, where a mere 29% of STEM leadership roles
        are occupied by women. Addressing this issue is 
        pivotal for equitable opportunities, fostering 
        innovation, and dismantling gender stereotypes.
        The exclusion of diverse female perspectives
        hampers societal progress and limits the 
        potential for groundbreaking discoveries and 
        solutions. It's imperative that we collectively
        work towards gender parity in STEM, unlocking
        a more inclusive and prosperous future for all.
        <br/>
        <p>
        <strong>Some of the reason behind this are listed below</strong>
        </p>
        </p>
        
      </div>
      <main className="main-body">
        <section className="home_section">
          <div className="res">
          <h2>Gender Stereotypes</h2>
          <p>Deep-seated stereotypes often portray STEM fields as "male-dominated," discouraging girls from pursuing them. These stereotypes can undermine girls' confidence in their abilities and limit their aspirations. For instance, girls might believe that engineering is a field more suitable for boys due to societal expectations.</p>
          </div>
          <div className="home_image">
            <img src={home_img1}/>
          </div>
        </section>


        <section className="home_section">
          <div className="res">
          <h2>Lack of Role Models</h2>
          <p>The scarcity of visible female role models in STEM fields can hinder girls' ability to envision themselves in such careers. When girls see fewer women succeeding in STEM, they might assume these fields are not for them. For instance, the underrepresentation of women in high-profile tech companies can be demotivating.</p>
          </div>
          <div className="home_image">
            <img src={home_img2}/>
          </div>
        </section>

        <section className="home_section">
          <div className="res">
          <h2>Unconscious Bias</h2>
          <p>Unconscious bias can affect teachers' and parents' expectations of girls' capabilities in STEM subjects. If educators and caregivers unknowingly discourage girls from pursuing STEM due to these biases, it can impact their self-esteem and interest. An example might involve girls being subtly steered away from math-intensive classes.</p>
          </div>
          <div className="home_image">
            <img src={home_img3}/>
          </div>
        </section>

        <section className="home_section">
          <div className="res">
          <h2>Societal Pressures</h2>
          <p>Social pressure to prioritize stereotypically "feminine" pursuits over STEM can discourage girls from exploring these fields. Society often pushes girls towards careers that are perceived as more nurturing or people-oriented. An example is girls being encouraged to pursue nursing rather than computer science.</p>
          </div>
          <div className="home_image">
            <img src={home_img4}/>
          </div>
        </section>

        <section className="home_section">
          <div className="res">
          <h2>Lack of Exposure</h2>
          <p>Limited exposure to STEM opportunities, especially in early education, can prevent girls from discovering their interests and talents in these fields. Schools with inadequate resources for STEM education might inadvertently exclude girls from these experiences.</p>
          </div>
          <div className="home_image">
            <img src={home_img5}/>
          </div>
        </section>

        <section className="home_section">
          <div className="res">
          <h2>Inadequate Support</h2>
          <p>A lack of supportive environments and mentors in STEM can lead to feelings of isolation. Girls might hesitate to pursue STEM careers if they don't have access to guidance and encouragement from peers and professionals.</p>
          </div>
          <div className="home_image">
            <img src={home_img6}/>
          </div>
        </section>

        <section className="home_section">
          <div className="res">
          <h2>Inclusive Curriculum</h2>
          <p>Outdated or biased curriculum materials can alienate girls by excluding their perspectives and interests. A curriculum that focuses solely on male achievements can make girls feel like they don't belong in STEM.</p>
          </div>
          <div className="home_image">
            <img src={home_img7}/>
          </div>
        </section>

        <section className="home_section">
          <div className="res">
          <h2>Unequal Opportunities</h2>
          <p>Unequal access to extracurricular activities, internships, and competitions can put girls at a disadvantage when it comes to building practical skills and networks in STEM fields. If boys are given more opportunities to participate in robotics clubs or coding camps, girls might feel excluded.</p>
          </div>
          <div className="home_image">
            <img src={home_img8}/>
          </div>
        </section>

        <section className="home_section">
          <div className="res">
          <h2>Lack of Flexibility</h2>
          <p>Rigidity in work environments, such as inflexible hours or limited parental leave policies, can make it difficult for women to balance STEM careers with family responsibilities. A girl might worry that pursuing a STEM career could hinder her ability to have a family.</p>
          </div>
          <div className="home_image">
            <img src={home_img9}/>
          </div>
        </section>

        <section className="home_section">
          <div className="res">
          <h2>Harassment and Discrimination</h2>
          <p>Reports of harassment and discrimination in male-dominated STEM workplaces can deter girls from pursuing such careers. News about hostile environments might lead girls to question whether they would be treated fairly in those fields.</p>
          </div>
          <div className="home_image">
            <img src={home_img10}/>
          </div>
        </section>

        <section className="home_section">
          <div className="res">
          <h2>Perceived Difficulty</h2>
          <p> Some girls might believe that STEM subjects are too difficult for them, even if they have the potential to excel. Stereotypes about "innate" abilities can lead to girls avoiding challenges in STEM.</p>
          </div>
          <div className="home_image">
            <img src={home_img11}/>
          </div>
        </section>

        <section className="home_section">
          <div className="res">
          <h2>Lack of Confidence</h2>
          <p>Girls' lower self-confidence in STEM subjects might stem from various factors, including societal pressure and past academic experiences. Girls might refrain from choosing STEM careers because they doubt their abilities.</p>
          </div>
          <div className="home_image">
            <img src={home_img12}/>
          </div>
        </section>

        <section className="home_section">
          <div className="res">
          <h2>Media Representation</h2>
          <p>Media often reinforces gender biases by depicting men as "geniuses" in STEM while women are rarely portrayed as experts. Such portrayals can make girls question whether they're capable of succeeding in STEM fields.</p>
          </div>
          <div className="home_image">
            <img src={home_img13}/>
          </div>
        </section>

        <section className="home_section">
          <div className="res">
          <h2>Gender Pay Gap</h2>
          <p>Reports of gender pay gaps in STEM careers can discourage girls from considering these fields. If they perceive that their efforts won't be fairly compensated, they might opt for other career paths.</p>
          </div>
          <div className="home_image">
            <img src={home_img14}/>
          </div>
        </section>

        <section className="home_section">
          <div className="res">
          <h2>Lack of Intersectional Support</h2>
          <p>Girls from marginalized backgrounds, such as girls of color or those with disabilities, might face compounded barriers in STEM fields. When these barriers are not addressed, it can deter them from pursuing STEM careers.</p>
          </div>
          <div className="home_image">
            <img src={home_img15}/>
          </div>
        </section>


      </main>
    </div>
  );
};

export default HomePage;
