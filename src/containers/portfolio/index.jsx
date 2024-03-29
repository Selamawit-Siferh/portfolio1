
import React, { useState } from "react";
import PageHeaderContainer from "../../components/pageHeaderContent";
import image1 from "../../assets/calcula.PNG";
import image2 from "../../assets/dconv.PNG";
import image3 from "../../assets/eal2.PNG";
import image4 from "../../assets/doR.PNG";
import image5 from "../../assets/eal.PNG";
import image6  from "../../assets/port1.PNG";
import image7  from "../../assets/portfolio.PNG"
import image8 from "../../assets/hag.PNG"


import "./style.scss";

import { BsInfoCircleFill } from "react-icons/bs";

const pData = [
  {
    id: 1,
    name: "CH exploring system",
    image: image8,
    link: "https://github.com/GetnetAdugna/Cultural-and-Historical-features-Exploration-site-with-spring-Framework",
  },
  {
    id: 2,
    name: "Elearning",
    image: image5,
    link: "https://github.com/nati589/elearning",
  },
  {
    id: 3,
    name: "TAHOA",
    image: image3,
    link: "https://github.com/Usmaelabdureman/Patient-Appointment",
  },
  {
    id: 4,
    name: "DOZER",
    image: image4,
    link: "https://github.com/orgs/Tech-Gem/repositories",
    
  },
  {
    id: 5,
    name: "Calculator",
    image: image1,
    link: "https://github.com/Selamawit-Siferh/calculator",
    
  },
  {
    id: 6,
    name: "Calander Converter",
    image: image2,
    link: "https://github.com/Selamawit-Siferh/calenderConverter",
    
  },
  {
    id: 4,
    name: "Personal Website",
    image: image6,
    link: "https://github.com/Selamawit-Siferh/personal-web",
    
  },
  {
    id: 4,
    name: "First Portfolio",
    image: image7,
    link: "https://github.com/Selamawit-Siferh/portfolio",
    
  },
];
const fData = [
  { filterId: 1, lable: "all" },
  { filterId: 2, lable: "Development" },
  { filterId: 3, lable: "Design" },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredvalue] = useState(1);
  const [hoveredvalue, setHoveredvalue] = useState(null);

  function handleFilter(currentId) {
    setFilteredvalue(currentId);
  }
  console.log(filteredvalue);
  function handleHover(index) {
    setHoveredvalue(index);
  }
  console.log(hoveredvalue);

  const filteredItems =
    filteredvalue === 1
      ? pData
      : pData.filter((item) => item.id === filteredvalue);
  console.log(filteredItems);
  return (
    <section className="portfolio" id="portfolio">
      <PageHeaderContainer
        headerText="My  Projects"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {fData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.lable}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item,index) => (
            <div
              className="portfolio__content__cards__item"
              key={`carditems${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href="">
                  <img src={item.image} alt="dummy data" />
                </a>
              </div>
              <div className="overlay">
                { index===hoveredvalue&&(
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.location.href = item.link}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
