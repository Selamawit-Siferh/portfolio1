import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigateCpage = () => {
    navigate('/contact');
  };
  const handleDownloadAndOpen = (fileUrl, downloadName) => {
  // Open in new tab
  window.open(fileUrl, '_blank', 'noopener,noreferrer');
  // Trigger download
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = downloadName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section className="home" id='home'>
      <div className="home__text_wrapper">
        <h1>
          Hello, I'm Selamawit<br />
          Software Engineer
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
    <button
      className="btn highlighted-btn"
      onClick={() => handleDownloadAndOpen('Selamawit-resume.pdf', 'Selamawit resume.pdf')}
    >
      Get Resume
    </button>
    <button
      className="btn highlighted-btn"
      onClick={() => handleDownloadAndOpen('educational documents.pdf', 'selamawit certeficate.pdf.pdf')}
    >
      Get Document
    </button>
    <button
      className="btn highlighted-btn"
      onClick={() => handleDownloadAndOpen('selamawit certeficate.pdf', 'selamawit certeficate.pdf.pdf')}
    >
      Get Certificate
    </button>
</div>
        {/* <div className="home__contact-me">
          <button onClick={handleNavigateCpage}>Hire Me</button>
          <a href="Selamawit-resume.pdf" download="Selamawit resume.pdf">
              <button className="btn higlithted-btn"> Get Resume</button>
          </a>
          <a href="educational documents.pdf" download="documents.pdf">
              <button className="btn higlithted-btn"> Get Document</button>
          </a>
          <a href="certeficates.pdf" download="documents.pdf">
              <button className="btn higlithted-btn"> Get Certeficate</button>
          </a>
        </div> */}
      
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