import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigateCpage = () => {
    navigate('/contact');
  };

  return (
    <section className="home" id='home'>
      <div className="home__text_wrapper">
        <h1>
          Hello, I'm Selamawit<br />
          Front End Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: 'translateY(550px)' }}
        end={{ transform: 'translate(0px)' }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateCpage}>Hire Me</button>
          <a href="resume.pdf" download="Selamawit resume.pdf">
              <button className="btn higlithted-btn"> Get Resume</button>
          </a>
        </div>
      
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100074340554894">
                <i className="fa fa-facebook-square"></i>
              </a>

              <a href="https://t.me/Gesmh">
                <i className="fa fa-telegram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCdqOIHEiT4PDaflxyhD0Ouw">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/selamawits/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/Selamawit-Siferh">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
      </Animate>
    </section>
  );
};

export default Home;