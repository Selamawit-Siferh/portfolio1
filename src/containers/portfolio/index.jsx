import React, { useState } from "react";
import PageHeaderContainer from "../../components/pageHeaderContent";
import calculator from "../../assets/calcula.PNG";
import converter from "../../assets/dconv.PNG";
import image3 from "../../assets/eal2.PNG";
import image4 from "../../assets/doR.PNG";
import image5 from "../../assets/eal.PNG";
import image6 from "../../assets/port1.PNG";
import image7 from "../../assets/portfolio.PNG";
import image8 from "../../assets/hag.PNG";
import dozer from "../../assets/Dozer.png";
import mint from "../../assets/mint.PNG";
import cbe  from "../../assets/agriculture.png"
import elearning from "../../assets/elearning.png";
import mk from "../../assets/mk.png";
import agriculture from "../../assets/agriculture.png";



import "./style.scss";

import { BsInfoCircleFill } from "react-icons/bs";

const pData = [
  {
    id: 2,
    name: "CH Exploring System",
    image: image8,
    link: "https://github.com/GetnetAdugna/Cultural-and-Historical-features-Exploration-site-with-spring-Framework",
  },
  {
    id: 2,
    name: "Elearning Website",
    image: image5,
    link: "https://github.com/nati589/elearning",
  },
  {
    id: 2,
    name: "TAHOA",
    image: image3,
    link: "https://github.com/Usmaelabdureman/Patient-Appointment",
  },

  {
    id: 2,
    name: "Calculator",
    image: calculator,
    link: "https://github.com/Selamawit-Siferh/calculator",
  },
  {
    id: 2,
    name: "Calander Converter",
    image:  converter,
    link: "https://github.com/Selamawit-Siferh/calenderConverter",
  },
  {
    id: 2,
    name: "Personal Website",
    image: image6,
    link: "https://github.com/Selamawit-Siferh/personal-web",
  },
  {
    id: 2,
    name: "First Portfolio",
    image: image7,
    link: "https://github.com/Selamawit-Siferh/portfolio",
  },
  {
    id: 2,
    name: "Dozer",
    image: image4,
    link: "https://github.com/orgs/Tech-Gem/repositories",
  },
  {
    id: 2,
    name: "MINT CRM",
    image: mint,
    link: "",
  },
  {
    id: 2,
    name: "CBE Retail System",
    image: cbe,
    link: "hhttps://github.com/moltab/RlimsFrontend",
  },
  {
    id: 3,
    name: "Elearning Figma Design",
    image: elearning,
    link: "https://www.figma.com/design/qKolKo9uJY5s2Db1mmfrP9/elearning?node-id=0-1&p=f&t=mKTGDn1Yvofd6Ts6-0",
  },
  {
    id: 3,
    name: "Dozer Figma Design",
    image: dozer,
    link: "https://www.figma.com/design/bMeKkmuDkHfo6SRYuvN8xw/Skip-Product-Design--Copy---Copy-?node-id=6-2&p=f&t=LzEN3i8saEZUZBh5-0",
  },
  {
    id: 3,
    name: "MK Library Figma",
    image:mk ,
    link: "https://www.figma.com/design/f0VwXzoVpiKw7CsreM6XbH/MK--Digital-Library?node-id=0-1&p=f&t=o9DJWqZ4lo14wIN4-0",
  },
  {
    id: 3,
    name: "Agriculture Figma",
    image: agriculture,
    link: "https://www.figma.com/design/EXvAmcN3ps9YqTdZFsRj0i/Agricultural-Website?node-id=201-2&t=X2h7E0rA0CWLwD3V-0",
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
          {filteredItems.map((item, index) => (
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
                {index === hoveredvalue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => (window.location.href = item.link)}>
                      Visit
                    </button>
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
