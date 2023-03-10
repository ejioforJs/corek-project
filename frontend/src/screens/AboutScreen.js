import React, { useState } from "react";
import aboutbg from "../assets/about-bg.jpg";
import we_are from "../assets/who-we-are.jpg";
import we_do from "../assets/what-we-do.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import place1 from "../assets/place1.jpg";
import place2 from "../assets/place2.jpg";
import place3 from "../assets/place3.jpg";
import place4 from "../assets/place4.jpg";
import place5 from "../assets/place5.jpg";
import it_work from "../assets/how-it-work.jpg";
import "../Styles/AboutScreen.css";
import { Link } from "react-router-dom";

function AboutScreen() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const [readMore3, setReadMore3] = useState(false);
  const extraContent1 = (
    <span>
      <span className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur nequeab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.
      </span>
    </span>
  );
  const linkName1 = readMore1 ? "READ LESS" : "READ MORE";
  const extraContent2 = (
    <span>
      <span className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur nequeab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.
      </span>
    </span>
  );
  const linkName2 = readMore2 ? "READ LESS" : "READ MORE";
  const extraContent3 = (
    <span>
      <span className="extra-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
        consectetur nequeab porro quasi culpa nulla rerum quis minus
        voluptatibus sed hic ad quo sint, libero commodi officia aliquam!
        Maxime.
      </span>
    </span>
  );
  const linkName3 = readMore3 ? "READ LESS" : "READ MORE";
  return (
    <>
      <div className="relative">
        <img
          className="h-[55vh] w-full -mt-24"
          src={aboutbg}
          alt="hero"
        />
        <div className="absolute z-10 h-full top-0 w-full bg-gradient-to-t opacity-60 from-corekColor3 to-corekColor3"></div>
        <div className="z-20 absolute border-l-[3px] border-corekColor1 pl-4 md:pl-5 text-white text-2xl md:text-[38px] bottom-24 md:left-16">
          ABOUT US
        </div>
      </div>
      <div className="ml-4 md:ml-16 mt-4 flex flex-row items-center space-x-3 text-xs">
        <Link to="/">
          <div className="flex flex-row items-center space-x-2 duration-300 hover:text-corekColor1">
            <span>Home</span>
            <span>{">"}</span>
          </div>
        </Link>
        <Link to="/aboutus">
          <div className="flex flex-row items-center space-x-2 duration-300  hover:text-corekColor1">
            <span>About Us</span>
            <span>{">"}</span>
          </div>
        </Link>
      </div>
      <div className="learn-text">
        <h1>Learn with passion to live with purpose</h1>
        <p>
          You can take that first course,time waits for no one! Buy it and be
          empowered.This may be the chance God has paved for you,don't miss it!
        </p>
      </div>
      <div className="about-activity">
        <div className="special-text">
          <h1>What Makes Us Special?</h1>
          <p>
            We are special in our own way and that's actually what makes us
            special.
          </p>
        </div>
        <div className="div-flex">
          <div className="image">
            <img src={we_are} alt="" />
            <h1>Who we are</h1>
            <p>
              In order to be considered to be the best,you have to do what you
              have to do and be ready for the worst {readMore1 && extraContent1}
            </p>
            <p
              className="read-more-link"
              onClick={() => {
                setReadMore1(!readMore1);
              }}
            >
              <h2>{linkName1}</h2>
            </p>
          </div>
          <div className="image">
            <img src={we_do} alt="" />
            <h1>What we do</h1>
            <p>
              You have to be serious and be hardworking and also make good
              friends.Also try and be yourself {readMore2 && extraContent2}
            </p>
            <p
              className="read-more-link"
              onClick={() => {
                setReadMore2(!readMore2);
              }}
            >
              <h2>{linkName2}</h2>
            </p>
          </div>
          <div className="image">
            <img src={it_work} alt="" />
            <h1>How it works</h1>
            <p>
              It is paramount you be the best version of yourself and be the
              greatest version of what you can be {readMore3 && extraContent3}
            </p>
            <p
              className="read-more-link"
              onClick={() => {
                setReadMore3(!readMore3);
              }}
            >
              <h2>{linkName3}</h2>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="meet-div">
      <div className="meet-team">
      <h1>Meet Our Team</h1>
      <p>The special group of staff born to achieve great and wonderful things</p>
      </div>
     </div> */}
      <div className="slider-div">
        <div className="great-place">A Great Place to Grow</div>
        <Slider {...settings} className="slider">
          <img src={place1} alt="" />
          <img src={place2} alt="" />
          <img src={place3} alt="" />
          <img src={place4} alt="" />
          <img src={place5} alt="" />
          <img src={place4} alt="" />
          <img src={place2} alt="" />
          <img src={place1} alt="" />
        </Slider>
      </div>
    </>
  );
}

export default AboutScreen;
