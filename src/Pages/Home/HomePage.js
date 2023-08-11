import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HomePage.css';

const HomePage = () => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div>
      <header className="header">
        <Slider {...sliderSettings}>
          <div className="slide">
            <div className="slide-content">
              <div className="quote">"Empowerment is not a buzzword, it's a guiding principle."</div>
              <div className="slide-image">
                <img src="successful_women_1.jpg" alt="Successful Woman" />
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide-content">
              <div className="quote">"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."</div>
              <div className="slide-image">
                <img src="successful_women_2.jpg" alt="Successful Woman" />
              </div>
            </div>
          </div>
          <div className="slide">
            <div className="slide-content">
              <div className="quote">"The future belongs to those who believe in the beauty of their dreams."</div>
              <div className="slide-image">
                <img src="successful_women_3.jpg" alt="Successful Woman" />
              </div>
            </div>
          </div>
        </Slider>
      </header>

      <main className="main-body">
        <section className="section">
          <h2>Why Girls are Not Choosing STEM?</h2>
          <p>Text describing the challenges and barriers faced by girls in pursuing STEM fields.</p>
        </section>
        <section className="section">
          <h2>The Reason Behind the Under-representation of Women in Tech</h2>
          <p>Text explaining the factors contributing to the under-representation of women in the tech industry.</p>
        </section>
        {/* Add more sections as needed */}
      </main>
    </div>
  );
};

export default HomePage;
