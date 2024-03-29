import React from "react";
import "./style.scss";
import PageHeaderContainer from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
const personDetails = [
  {
    lable: "Name",
    value: "Selamawit Siferh",
  },
  {
    lable: "age",
    value: "22",
  },
  {
    lable: "Address",
    value: "Addis  Ababa",
  },
  {
    lable: "Email",
    value: "siferhselamawit@gmail.com",
  },
  {
    lable: "Contact",
    value: "+251977643415",
  },
];
const jobSummary =
  "I am a Medium Front-End Developer with 1 year of internship experience. During my internship, I gained valuable skills in front-end development and honed my abilities in HTML, CSS, and JavaScript. Additionally, I have 3 months of experience in Figma Design and React development at HBJB company, where I focused on creating user-friendly interfaces and implementing interactive components using React. I also worked as a Full Stack Developer at MINT company for 4 months, utilizing HTML, CSS, JavaScript, and Django to develop web applications. In my role at PEDS company for 7 months, I contributed to the successful implementation of various applications. With a diverse skill set and a strong understanding of the development process, I am confident in my ability to deliver high-quality solutions and contribute effectively to future projec ";
const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContainer
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translate(0px)" }}
          >
            <h3>Front end developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translate(0px)" }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.lable}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translate(0px)" }}
          >
          <div className="about__content__servicesWrapper__innerContent">
          <div>
            <FaDev size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <DiApple size={60} color="var(--yellow-theme-main-color)" />
          </div>
          </div>
          </Animate>
         
        </div>
      </div>
    </section>
  );
};
export default About;
