import React from 'react';
import { Link } from 'react-router-dom';
import aboutbg from '../assets/about-bg.jpg';
import address from '../assets/address.png';
import contact from '../assets/contact.png';
import timer from '../assets/timer.png';
import '../Styles/ContactScreen.css';

function ContactScreen() {
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
          CONTACT US
        </div>
      </div>
      <div className="ml-4 md:ml-16 mt-4 flex flex-row items-center space-x-3 text-xs">
        <Link to="/">
          <div className="flex flex-row items-center space-x-2 duration-300 hover:text-corekColor1">
            <span>Home</span>
            <span>{">"}</span>
          </div>
        </Link>
        <Link to="/contactus">
          <div className="flex flex-row items-center space-x-2 duration-300  hover:text-corekColor1">
            <span>Contact Us</span>
            <span>{">"}</span>
          </div>
        </Link>
      </div>
      <div className="card-flex">
        <div className="card">
          <img
            src={address}
            alt=""
          />
          <div className='text-center'>
          <h1>Address way</h1>
          <p>1800 Abbot Kinney Blvd. Unit D & E.</p>
          </div>
        </div>
        <div className="card">
          <img
            src={contact}
            alt=""
          />
          <div className='text-center'>
          <h1>Contact info</h1>
          <p>
            Mobile: (+234) - 80 - 757 - 216 - 44
            <br /> Mail: js448900@gmail.com
          </p>
          </div>
        </div>
        <div className="card">
          <img
            src={timer}
            alt=""
          />
          <div className='text-center'>
          <h1>Work timer</h1>
          <p>
            Monday - Friday: 09:00 - 20:00
            <br />
            Sunday & Saturday: 10:30 - 22:0
          </p>
          </div>
        </div>
      </div>
      <div className='parent-form'>
        <h1>
          Fill the form below so we can get to know you and your needs better.
        </h1>
        <form>
          <div className="form-div">
            <input
              type="text"
              placeholder="Name *"
            />
            <input
              type="email"
              placeholder="Email *"
            />
            <input
              type="text"
              placeholder="Subject *"
            />
            <textarea
              type="text"
              placeholder="Message *"
            />
            <button type='submit'>SUBMIT</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactScreen;